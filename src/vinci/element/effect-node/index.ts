import { Group } from 'konva/lib/Group';
import { Rect } from 'konva/lib/shapes/Rect';

import { NODE_HEADER_HEIGHT, NODE_WIDTH } from '../style/node';

export class EffectNode extends Group {
  private header: Rect;
  private body: Rect;

  constructor() {
    super({
      draggable: true,
    });

    this.x(100);
    this.y(100);

    this.header = new Rect({
      x: 0,
      y: 0,
      width: NODE_WIDTH,
      height: NODE_HEADER_HEIGHT,
      fill: '#4B4DED',
    });
    this.add(this.header);

    this.body = new Rect({
      x: 0,
      y: 0 + NODE_HEADER_HEIGHT,
      width: NODE_WIDTH,
      height: 300,
      fill: '#ECF1F4',
    });
    this.add(this.body);
  }
}
