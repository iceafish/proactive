import { interfaces, METADATA_KEY } from 'inversify';

import { DI_SERVICE_METADATA_KEY, DI_UNIT_MODULE_METADATA_KEY } from './constant';

import type { DeclareMetadata, UnitModuleOptions } from '../type';

export const isAlreadyDecorated = (target: Object): boolean =>
  Reflect.hasOwnMetadata(METADATA_KEY.PARAM_TYPES, target);

export const getDecoratedMetadataHelper = (
  target: Object,
  propertyKey: string | symbol
): {
  hasTag: (key: string) => (value: unknown) => boolean;
  isOptional: () => boolean;
} => {
  const metadata:
    | Record<string | symbol, interfaces.Metadata<unknown>[] | undefined>
    | undefined = Reflect.getMetadata(METADATA_KEY.TAGGED_PROP, target);

  const hasTag =
    (key: string) =>
    (value: unknown): boolean =>
      metadata?.[propertyKey]?.some((it) => it.key === key && it.value === value) ?? false;

  return {
    hasTag,
    isOptional: () => hasTag(METADATA_KEY.OPTIONAL_TAG)(true),
  };
};

export const defineServiceMetadata = (metadataValue: DeclareMetadata[], target: Object) => {
  Reflect.defineMetadata(DI_SERVICE_METADATA_KEY, metadataValue, target);
};

export const getServiceMetadata = (target: Object): DeclareMetadata[] =>
  Reflect.getMetadata(DI_SERVICE_METADATA_KEY, target) ?? [];

export const getUnitModuleMetadata = (target: Object): UnitModuleOptions | undefined =>
  Reflect.getMetadata(DI_UNIT_MODULE_METADATA_KEY, target);

export const defineUnitModuleMetadata = (metadata: UnitModuleOptions, target: Object) =>
  Reflect.defineMetadata(DI_UNIT_MODULE_METADATA_KEY, metadata, target);
