import { Container, interfaces } from 'inversify';
import { DIContainerCreateHelper } from '../type';
import { Module } from './module';

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
  public static load(...modules: Module[]): DIContainerCreateHelper {
    const classMap: Map<string, unknown> = DI.resolveModuleInfo(modules);

    return {
      createContainer: (options) => {
        const container = new Container(options ?? DI.DefaultContainerOptions);
        return container;
      },
    };
  }

  private static resolveModuleInfo(modules: Module[]): Map<string, unknown> {
    return new Map();
  }
}
// 1
// @service

// 2
// createContainer env
// container.bind(ID).to(Classz);

// 3
// container.get()
