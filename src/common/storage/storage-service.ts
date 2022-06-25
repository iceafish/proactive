import { TypedString } from '@common/type';
import { service } from '@core/di';
import { IStorageService } from './interface';

@service(IStorageService)
export class StorageService implements IStorageService {
  get<T>(id: TypedString<T>): Promise<T>;
  get<T1, T2>(ids: [T1, T2]): Promise<[T1, T2]>;
  async get<T, T1, T2>(ids: unknown): Promise<T | [T1, T2]> {
    throw new Error('Method not implemented.');
  }
}
