import { FC, useEffect } from 'react';
import { DI } from '../../core/di';

export interface Props {}

export const Container: FC<Props> = () => {
  useEffect(() => {
    const ctor = DI.load().createContainer();
    console.log('=== load container: ', ctor);
  }, []);

  return null;
};
