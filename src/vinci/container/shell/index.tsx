import './index.css';

import { Component, PropsWithChildren, ReactNode } from 'react';

import { PropertiesPanel } from '@vinci/component/properties-panel';
import { ResourcePanel } from '@vinci/component/resource-panel';
import { INavigationBar } from '@vinci/contract';
import { inject, optional } from '@core/di';

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
        <div className="body">
          <div className="left-res">
            <ResourcePanel />
          </div>
          <div className="main-stage">{children}</div>
          <div className="right-props">
            <PropertiesPanel />
          </div>
        </div>
      </div>
    );
  }
}
