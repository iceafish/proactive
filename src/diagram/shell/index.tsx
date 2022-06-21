import { Component, PropsWithChildren, ReactNode } from 'react';
import { resolve } from '@core/di';
import { IFooService } from '@service';

interface Props {}

interface States {}

export class Shell extends Component<PropsWithChildren<Props>, States> {
  @resolve
  private readonly foo: IFooService;

  override render(): ReactNode {
    const { children } = this.props;

    console.log('render property foo: ', this.foo);
    return <> {children}</>;
  }
}
