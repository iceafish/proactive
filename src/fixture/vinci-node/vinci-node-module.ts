import { NavigationBarAgency, StageManager } from '@vinci';
import { unitModule } from '@core/di';

@unitModule({
  name: 'VinciNodeModule',
  providers: [StageManager, NavigationBarAgency],
})
export class VinciNodeModule {}
