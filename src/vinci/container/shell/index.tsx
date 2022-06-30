import { Component, PropsWithChildren, ReactNode } from 'react';

interface Props {}

interface States {}

export class Shell extends Component<PropsWithChildren<Props>, States> {
  override render(): ReactNode {
    const { children } = this.props;
    return <> {children}</>;
  }
}
