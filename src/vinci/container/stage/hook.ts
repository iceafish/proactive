import { useLayoutEffect, useState } from 'react';

export interface Size {
  width: number;
  height: number;
}

export const useStageSize = (): Size => {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  useLayoutEffect(() => {
    const ref = document.querySelector('.main-stage');
    if (!ref) {
      return;
    }
    const styles = getComputedStyle(ref, null);
    setWidth(ref.clientWidth - parseFloat(styles.getPropertyValue('padding')) * 2);
    setHeight(ref.clientHeight - parseFloat(styles.getPropertyValue('padding')) * 2);
  }, []);

  console.log(width, height);

  return {
    width,
    height,
  };
};
