import { Component, FC, ReactNode, useEffect } from 'react';
import { DI, fooInject } from '@core/di';
import { FooModule, IFooService } from '@service';

export interface Props {}

export const Container: FC<Props> = () => {
  useEffect(() => {
    const ctor = DI.load(FooModule).createContainer();

    ctor.get(IFooService).say();
    // console.log('=== load container: ', ctor);
  }, []);

  return null;
};

export class FooClassComponent extends Component {
  @fooInject(IFooService)
  private fooService: IFooService;

  override render(): ReactNode {
    console.log(this.fooService);
    return null;
  }
}
