import { IVinciStageManager } from '../contract';
import { ReactNode, createElement } from 'react';
import { Stage } from '../container';
import { service } from '@core/di';

@service(IVinciStageManager)
export class VinciStageManager implements IVinciStageManager {
  render(draggable: boolean): ReactNode {
    return createElement(Stage, { draggable });
  }
}
