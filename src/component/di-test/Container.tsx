import { Component, FC, PropsWithChildren, ReactNode, useMemo } from 'react';
import { DI, DIContainerContext, inject } from '@core/di';
import { FooModule, IFooService } from '@service';

export interface Props {}

export const Container: FC<PropsWithChildren<Props>> = ({ children }) => {
  const container = useMemo(() => DI.load(FooModule).createContainer(), []);

  return (
    <DIContainerContext.Provider value={container}>{children}</DIContainerContext.Provider>
  );
};

export class FooClassComponent extends Component {
  @inject(IFooService)
  private fooService: IFooService;

  override render(): ReactNode {
    console.log(this.fooService);
    return null;
  }
}
