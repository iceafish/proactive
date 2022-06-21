import { FC, useEffect } from 'react';

import { Stage as KonvaStage, Layer, Rect, Circle } from 'react-konva';
import { __CORE_VERSION__ } from '@core';
import { Shell } from '../shell';

export interface IProps {
  draggable: boolean;
}

export const Stage: FC<IProps> = ({ draggable }) => {
  useEffect(() => {
    console.log('=== load core version ===', __CORE_VERSION__);
  }, []);

  return (
    // Stage - is a div wrapper
    // Layer - is an actual 2d canvas element, so you can have several layers inside the stage
    // Rect and Circle are not DOM elements. They are 2d shapes on canvas
    <Shell>
      <KonvaStage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Rect width={50} height={50} fill="red" draggable={draggable} />
          <Circle x={200} y={200} stroke="black" radius={50} />
        </Layer>
      </KonvaStage>
    </Shell>
  );
};
