import { createServiceSymbol } from '@core/di';

import type { ReactNode } from 'react';

export interface IStageManager {
  render(draggable?: boolean): ReactNode;
}

export const IStageManager = createServiceSymbol<IStageManager>('stageManager');
