import { inject } from 'inversify';

import { createServiceSymbol, service, unitModule } from '@core/di';

export interface IFooService {}

export const IFooService = createServiceSymbol<IFooService>('IFooService');

@service(IFooService)
export class Foo implements IFooService {
  // @inject(IBarService) private barService: IBarService;

  say(): void {
    // console.log(this.barService.value());
  }
}

@unitModule({
  name: 'FooConsoleModule',
  providers: [Foo],
})
export class FooConsoleModule {}
