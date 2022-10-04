import { FunctorSignature } from '@protocol/contract';

export interface ChainArgumentsType {}

export interface FunctorMetadata {
  signature: FunctorSignature;
  argumentsType: ChainArgumentsType[];
}
