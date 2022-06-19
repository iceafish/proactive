import type { Container } from 'inversify';

export type { Container } from 'inversify';

export interface ClassType {}

export interface DIContainerCreateHelper {
  createContainer(options?: {}): Container;
}
