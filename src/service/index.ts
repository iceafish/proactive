import { inject } from 'inversify';
import { createServiceSymbol, service, unitModule } from '../core/di';

export interface IBarService {
  value(): string;
}

export const IBarService = createServiceSymbol<IBarService>('IBarService');

@service(IBarService)
export class Bar implements IBarService {
  value(): string {
    return 'hello world';
  }
}

export interface IFooService {
  say(): void;
}

export const IFooService = createServiceSymbol<IFooService>('IFooService');

@service(IFooService)
export class Foo implements IFooService {
  @inject(IBarService) private barService: IBarService;

  say(): void {
    console.log(this.barService.value());
  }
}

@unitModule({
  name: 'FooModule',
  providers: [Foo, Bar],
})
export class FooModule {}
