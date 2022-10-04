import { FunctorSignature } from '@protocol/contract';

export interface ChainArguments {
  type: 'callback' | 'string' | 'number' | 'boolean' | 'Object';
  value: Function | string | number | boolean | object;
}

export interface ChainNode {
  id: string;
  signature: FunctorSignature;
  arguments: ChainArguments[];
}

export interface ChainMap {
  [chainId: string]: ChainNode;
}
