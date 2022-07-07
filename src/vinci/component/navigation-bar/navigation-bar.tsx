import './index.css';

import { Component, ReactNode } from 'react';

export interface NavigationBarProps {}

export class NavigationBar extends Component<NavigationBarProps> {
  override render(): ReactNode {
    return <div className="navbar-main">navbar</div>;
  }
}
