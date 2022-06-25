export type FunctorSignature = string[];

export interface ChainArgumentsType {}

export interface FunctorMetadata {
  signature: FunctorSignature;
  argumentsType: ChainArgumentsType[];
}
