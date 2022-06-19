import { ClassType } from '../type';

export abstract class Module {
  public abstract readonly name: string;
  public abstract readonly providers: ClassType[];
}
