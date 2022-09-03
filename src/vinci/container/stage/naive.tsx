import { __CORE_VERSION__ } from '@core';
import { Layer } from 'konva/lib/Layer';
import { Stage } from 'konva/lib/Stage';
import { FC, useEffect, useRef } from 'react';

import { EffectNode } from '@vinci/element/effect-node';

import { VINCI_STAGE_ID } from './constant';
import { useStageSize } from './hook';

export interface IProps {
  draggable?: boolean;
}

export const NaiveStage: FC<IProps> = ({ draggable }) => {
  const stageRef = useRef<HTMLDivElement>();
  const konvaRef = useRef<Stage>();

  const { width, height } = useStageSize();

  useEffect(() => {
    console.log('=== load core version ===', __CORE_VERSION__);
    if (!stageRef.current) {
      return;
    }

    if (konvaRef.current) {
      konvaRef.current.width(width);
      konvaRef.current.height(height);
      konvaRef.current.batchDraw();
      return;
    }

    konvaRef.current = new Stage({
      container: stageRef.current,
      width,
      height,
    });

    const group = new Layer();
    group.add(new EffectNode());

    konvaRef.current.add(group);
    konvaRef.current.batchDraw();
  }, [width, height]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <div id={VINCI_STAGE_ID} ref={stageRef as unknown as any} />;
};
