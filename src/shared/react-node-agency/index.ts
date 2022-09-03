import { ComponentType, createElement, ReactNode } from 'react';

export abstract class ReactNodeAgency<Props = {}> {
  protected readonly Component: ComponentType<Props>;
  protected readonly presetProps: Partial<Props>;
  public render(props: Props): ReactNode {
    return createElement(this.Component, {
      ...this.presetProps,
      ...props,
    });
  }
}
