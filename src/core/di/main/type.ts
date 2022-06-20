import type { interfaces } from 'inversify';
import type { TypedSymbol } from '../../../common/type';

export interface ClassType {}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Constructor<T = any> = new (...args: any[]) => T;

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
}

export interface DIContainerCreateHelper {
  createContainer(options?: {}): Container;
}

export interface DeclareMetadata<
  T = unknown,
  TFunction extends Function = Function
> {
  constraint: (
    bind: interfaces.Bind,
    bindTarget: Constructor
  ) => ReturnType<interfaces.BindingToSyntax<T>['to']>;
  implementationClass: TFunction;
}
