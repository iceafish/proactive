import { decorate, injectable, inject as inversifyInject } from 'inversify';
import { ComponentClass } from 'react';

import { TypedSymbol } from '@common/type';
import { isReactClassComponent } from '@common/util';

import { makeSureAcceptContextType } from '../react';
import type { DIContainerContextValue, DeclareMetadata, UnitModuleOptions } from '../type';
import {
  defineServiceMetadata,
  defineUnitModuleMetadata,
  getDecoratedMetadataHelper,
  getServiceMetadata,
  isAlreadyDecorated,
} from './helper';

export const createServiceSymbol: <T>(id: string) => TypedSymbol<T> = (id) => Symbol.for(id);

export const service: <T>(id: TypedSymbol<T>, force?: boolean) => ClassDecorator =
  (id, force) => (target) => {
    const isDecorated = isAlreadyDecorated(target);
    const redecorateWithInject = force === true;

    if (redecorateWithInject === true && isDecorated === false) {
      decorate(injectable(), target);
    } else if (redecorateWithInject === true && isDecorated === true) {
      // pass
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

    defineServiceMetadata([currentMetadata, ...getServiceMetadata(target)], target);
  };

export const contribution: (...ids: TypedSymbol<unknown>[]) => ClassDecorator =
  (ids) => (target) => {};

export const inject: <T>(id: TypedSymbol<T>) => PropertyDecorator =
  (id) => (target, propertyKey) => {
    if (isReactClassComponent(target)) {
      makeSureAcceptContextType(<ComponentClass>target.constructor);

      Object.defineProperty(target, propertyKey, {
        enumerable: true,
        get() {
          const metadataHelper = getDecoratedMetadataHelper(target.constructor, propertyKey);
          const container = <DIContainerContextValue>this.context;
          if (!container) {
            throw new Error('DI inject 过程发生致命错误，容器未找到');
          }

          if (metadataHelper.isOptional() && !container?.isBound(id)) {
            return undefined;
          }

          return container.get(id);
        },
      });

      const descriptor = Object.getOwnPropertyDescriptor(target, propertyKey);
      if (!descriptor) {
        throw new Error('Failed to define property');
      }

      return descriptor;
    }

    return inversifyInject(id)(target, propertyKey);
  };

export const getContributions: <T>(id: TypedSymbol<T>) => ParameterDecorator =
  () => (target, propertyKey, parameterIndex) => {};

export const unitModule: (options: UnitModuleOptions) => ClassDecorator =
  (options) => (target) =>
    defineUnitModuleMetadata(options, target);

export { optional } from 'inversify';
