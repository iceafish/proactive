import { createServiceSymbol } from '@core/di';

export interface IStageContextmenuCommand {
  group?: string;
  order?: number;
  text: string;
  extra?: unknown;
  disable?: boolean | (() => boolean);
  visible?: boolean | (() => boolean);
}
export const IStageContextmenuCommand = createServiceSymbol<IStageContextmenuCommand>(
  'stageContextmenuCommand'
);

export interface INodeContextmenuCommand {
  group?: string;
  order?: number;
  text: string;
  extra?: unknown;
  disable?: boolean | (() => boolean);
  visible?: boolean | (() => boolean);
}
export const INodeContextmenuCommand = createServiceSymbol<INodeContextmenuCommand>(
  'nodeContextmenuCommand'
);
