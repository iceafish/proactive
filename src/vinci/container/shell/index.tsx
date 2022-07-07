import './index.css';

import { Component, PropsWithChildren, ReactNode } from 'react';

import { inject, optional } from '@core/di';
import { INavigationBar } from '@vinci/contract';

interface Props {}

interface States {}

export class Shell extends Component<PropsWithChildren<Props>, States> {
  @inject(INavigationBar)
  @optional()
  private navigationBar?: INavigationBar;

  override render(): ReactNode {
    const { children } = this.props;
    return (
      <div className="vinci-shell">
        {this.navigationBar && <div className="navbar">{this.navigationBar.render()}</div>}
        <div className="body">{children}</div>
      </div>
    );
  }
}
