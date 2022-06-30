import { getServiceMetadata, getUnitModuleMetadata } from './helper';
import type { Constructor, DIContainerCreateHelper } from '../type';
import { Container, interfaces } from 'inversify';

/**
 * 用于声明、创建
 *
 * DI 提供操作句柄、注入框架默认参数
 * 对于 声明式 api 方法，以及内部逻辑，由 该层获取到的用户实例 + 默认组装 「执行环境」 提供进去后
 * 产出「实例化」的 服务声明 API「运行时逻辑」
 */
export abstract class DI {
  private static DefaultContainerOptions: interfaces.ContainerOptions = {
    skipBaseClassChecks: true,
  };

  /**
   * load
   *
   * etc: Context.load(CoreModule, EditorModule, CompilerModule).createContainer
   *
   * @param modules
   * @returns
   */
  public static load(...modules: Constructor[]): DIContainerCreateHelper {
    const ctors = DI.resolveModuleInfo(modules);

    return {
      createContainer: (options = {}) => {
        const container = new Container({
          ...DI.DefaultContainerOptions,
          ...options,
        });

        ctors.forEach((it) => {
          const serviceMetadata = getServiceMetadata(it);
          serviceMetadata.forEach((service) => {
            service.constraint(container.bind.bind(container), it);
          });
        });

        return container;
      },
    };
  }

  /**
   * TODO Fix 这里的逻辑先简单写，后面要改
   *
   * @param modules
   * @returns
   */
  private static resolveModuleInfo(modules: Constructor[]): Constructor[] {
    return modules.reduce<Constructor[]>((prev, current) => {
      // 这里没有考虑引入模块
      const unitModuleOption = getUnitModuleMetadata(current)!;
      if (!unitModuleOption) {
        throw new Error(`unit module: ${current.name} metadata not found`);
      }

      return [...unitModuleOption.providers, ...prev];
    }, []);
  }
}
