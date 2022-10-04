import { FunctorSignature } from '@protocol/contract';

export interface Geometry {}

export interface NodeSlotPayload {
  id: string;
  index: {};
}

export interface NodeSlot {
  id: string;
  index: {}; // order and index
  payload?: NodeSlotPayload[];
  geometry: Geometry;
}

export interface LogicNode {
  id: string;
  signature: FunctorSignature;
  type: 'effect' | 'pure';
  geometry: Geometry;
  slot?: {
    [id: string]: NodeSlot;
  };
}

export interface LogicDiagramNode {
  [id: string]: LogicNode;
}

export interface LogicDiagramLink {
  source: [node: string, slot: string];
  target: [node: string, slot: string];
}

export interface LogicDiagram {
  nodes: LogicDiagramNode;
  links: LogicDiagramLink[];
}
