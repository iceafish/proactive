import { TypedString } from '@common/type';
import { createServiceSymbol } from '@core/di';

export interface IStorageService {
  get<T>(id: TypedString<T>): Promise<T>;
  get<T1, T2>(ids: [T1, T2]): Promise<[T1, T2]>;
}
export const IStorageService = createServiceSymbol<IStorageService>('storageService');
