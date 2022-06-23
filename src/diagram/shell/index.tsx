import { Component, PropsWithChildren, ReactNode } from 'react';
import { IFooService } from '@service';
import { fooInject } from '@core/di';

interface Props {}

interface States {}

export class Shell extends Component<PropsWithChildren<Props>, States> {
  @fooInject(IFooService)
  private fooService: IFooService;

  override render(): ReactNode {
    const { children } = this.props;

    console.log('render property fooService: ', this.fooService);
    return <> {children}</>;
  }
}
