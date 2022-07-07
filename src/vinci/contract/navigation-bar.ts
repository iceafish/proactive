import { createServiceSymbol } from '@core/di';

import type { ReactNode } from 'react';

export interface INavigationBar {
  render(): ReactNode;
}

export const INavigationBar = createServiceSymbol<INavigationBar>('navigationBar');
