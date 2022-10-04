import { Group } from 'konva/lib/Group';
import { Circle } from 'konva/lib/shapes/Circle';
import { Rect } from 'konva/lib/shapes/Rect';

import { NODE_HEADER_HEIGHT, NODE_WIDTH, NodeLayout } from '../style/node';

export class NodeSlot extends Group {
  constructor() {
    super({
      x: 0,
      y: NODE_HEADER_HEIGHT,
      draggable: false,
      listening: false,
    });

    this.add(
      new Rect({
        x: 0,
        y: 0,
        height: NodeLayout.LINE_HEIGHT,
        width: NODE_WIDTH / 2,
        fill: 'red',
      }),
    );

    this.add(
      new Circle({
        x: NodeLayout.PADDING,
        y: NodeLayout.PADDING,
        radius: NodeLayout.CONTENT_HEIGHT / 2,
        draggable: false,
        listening: false,
        fill: '#FFFFFF',
        stroke: 'grey',
        strokeWidth: 1,
      }),
    );

    // this.add(
    //   new Circle({
    //     x: NODE_WIDTH - NodeLayout.PADDING,
    //     y: NODE_HEADER_HEIGHT + NodeLayout.PADDING,
    //     radius: NodeLayout.CONTENT_HEIGHT / 2,
    //     draggable: false,
    //     listening: false,
    //     fill: '#FFFFFF',
    //     stroke: 'grey',
    //     strokeWidth: 1,
    //   }),
    // );
  }
}

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

    this.add(new NodeSlot());
  }
}
