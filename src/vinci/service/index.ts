import { createElement, ReactNode } from 'react';

import { service } from '@core/di';

import { IStageManager } from '../contract';
import { Stage } from '../container';

@service(IStageManager)
export class StageManager implements IStageManager {
  render(draggable?: boolean): ReactNode {
    return createElement(Stage, { draggable });
  }
}
