import type { interfaces } from 'inversify';

import type { TypedSymbol } from '@common/type';

export type DIContainerContextValue = Container | undefined;

export interface ClassType {}

export type Constructor<T = unknown> = new (...args: unknown[]) => T;

export interface UnitModuleOptions {
  name: string;
  providers: Constructor[];
  exports?: unknown[];
}

export interface ServiceOptions {}

export interface ContributionOptions {}

export interface ClassType {}

export interface Container {
  get<T>(serviceIdentifier: TypedSymbol<T>): T;
  isBound<T>(serviceIdentifier: TypedSymbol<T>): boolean;
}

export interface DIContainerCreateHelper {
  createContainer(options?: {}): Container;
}

export interface DeclareMetadata<T = unknown, TFunction extends Function = Function> {
  constraint: (bind: interfaces.Bind, bindTarget: Constructor<T>) => void;
  implementationClass: TFunction;
}
