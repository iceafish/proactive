import { TypedSymbol } from '@common/type';

export const useService = <T>(id: TypedSymbol<T>): T => null as unknown as T;

export const useOptionalService = <T>(id: TypedSymbol<T>): T | null => null;

export const useContributions = <T>(id: TypedSymbol<T>): T[] => [];
