export interface ChainSchemaParameter {
  [index: number]: string;
}

export interface ChainSchemaNode {
  signature: string[];
  parameters: ChainSchemaParameter;
}

export interface ChainSchema {
  [id: string]: ChainSchemaNode;
}
