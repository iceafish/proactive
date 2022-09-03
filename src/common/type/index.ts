export type TypedString<T> = string & { __typedef__?: T };
export type TypedSymbol<T> = symbol & { __typedef__?: T };
