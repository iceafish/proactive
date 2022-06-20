import { decorate, injectable, inject as inversifyInject } from 'inversify';
import type { TypedSymbol } from '../../../common/type';
import {
  defineServiceMetadata,
  defineUnitModuleMetadata,
  getServiceMetadata,
  isAlreadyDecorated,
} from './helper';
import type { DeclareMetadata, UnitModuleOptions } from './type';

export const createServiceSymbol: <T>(id: string) => TypedSymbol<T> = (id) =>
  Symbol.for(id);

export const service: <T>(
  id: TypedSymbol<T>,
  force?: boolean
) => ClassDecorator = (id, force) => (target) => {
  const isDecorated = isAlreadyDecorated(target);
  const redecorateWithInject = force === true;

  if (redecorateWithInject === true && isDecorated === false) {
    decorate(injectable(), target);
  } else if (redecorateWithInject === true && isDecorated === true) {
    // Do nothing
  } else {
    try {
      decorate(injectable(), target);
    } catch (e) {
      throw new Error(
        'Cannot apply @service decorator multiple times but is has been used ' +
          `multiple times in ${target.name} ` +
          'Please use @service(ID, true) if you are trying to declare multiple bindings!'
      );
    }
  }

  const currentMetadata: DeclareMetadata = {
    constraint: (bind, bindTarget) => bind(id).to(bindTarget),
    implementationClass: target,
  };

  defineServiceMetadata(
    [currentMetadata, ...getServiceMetadata(target)],
    target
  );
};

export const inject: <T>(id: TypedSymbol<T>) => PropertyDecorator = (id) =>
  inversifyInject(id);

export const contribution: (...ids: TypedSymbol<unknown>[]) => ClassDecorator =
  (ids) => (target) => {};

export const getContributions: <T>(id: TypedSymbol<T>) => ParameterDecorator =
  () => (target, propertyKey, parameterIndex) => {};

export const unitModule: (options: UnitModuleOptions) => ClassDecorator =
  (options) => (target) =>
    defineUnitModuleMetadata(options, target);
