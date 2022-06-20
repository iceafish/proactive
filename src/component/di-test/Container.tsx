import { FC, useEffect } from 'react';
import { DI } from '../../core/di';
import { FooModule, IFooService } from '../../service';

export interface Props {}

export const Container: FC<Props> = () => {
  useEffect(() => {
    const ctor = DI.load(FooModule).createContainer();

    ctor.get(IFooService).say();
    // console.log('=== load container: ', ctor);
  }, []);

  return null;
};
