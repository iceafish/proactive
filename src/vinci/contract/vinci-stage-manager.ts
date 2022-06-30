import { createServiceSymbol } from '@core/di';
import type { ReactNode } from 'react';

export interface IVinciStageManager {
  render(draggable: boolean): ReactNode;
}

export const IVinciStageManager = createServiceSymbol<IVinciStageManager>('vinciStageManager');
