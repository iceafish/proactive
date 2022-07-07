import type { ComponentType, ReactNode } from 'react';
import { INavigationBar } from '@vinci/contract';
import { ReactNodeAgency } from '@shared';
import { service } from '@core/di';

import { NavigationBar } from './navigation-bar';

@service(INavigationBar)
export class NavigationBarAgency extends ReactNodeAgency implements INavigationBar {
  protected override Component: ComponentType = NavigationBar;

  override render(): ReactNode {
    return super.render({});
  }
}
