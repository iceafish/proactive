import { __CORE_VERSION__ } from '@core';
import { FC, useEffect, useMemo } from 'react';

import { Shell } from '../shell';
import { NaiveStage } from './naive';
import { ReactStage } from './react';

export interface IProps {
  useReact?: boolean;
  draggable?: boolean;
}

export const Stage: FC<IProps> = ({ useReact }) => {
  useEffect(() => {
    console.log('=== load core version ===', __CORE_VERSION__);
  }, []);
  const stage = useMemo(() => (useReact ? <ReactStage /> : <NaiveStage />), [useReact]);

  return <Shell>{stage}</Shell>;
};
