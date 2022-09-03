import { __CORE_VERSION__ } from '@core';
import { FC, useEffect } from 'react';
import { Circle, Stage as KonvaStage, Layer, Rect, RegularPolygon } from 'react-konva';

import { ContextMenu } from '../../component';
import { Shell } from '../shell';
import { useStageSize } from './hook';

export interface IProps {
  draggable?: boolean;
}

export const ReactStage: FC<IProps> = ({ draggable }) => {
  useEffect(() => {
    console.log('=== load core version ===', __CORE_VERSION__);
  }, []);

  const { width, height } = useStageSize();

  return (
    // Stage - is a div wrapper
    // Layer - is an actual 2d canvas element, so you can have several layers inside the stage
    // Rect and Circle are not DOM elements. They are 2d shapes on canvas
    <Shell>
      <KonvaStage width={width} height={height}>
        <Layer>
          <Rect width={50} height={50} fill="red" draggable={draggable} />
          <RegularPolygon
            draggable
            x={80}
            y={120}
            sides={3}
            rotationDeg={90}
            radius={24}
            fill="#00D2FF"
            stroke="black"
            strokeWidth={1}
            lineJoin="round"
          />
          <Circle x={200} y={200} stroke="black" strokeWidth={1} radius={16} fill="#00D2FF" />
        </Layer>
      </KonvaStage>
      <ContextMenu x={0} y={0} visible={false} />
    </Shell>
  );
};
