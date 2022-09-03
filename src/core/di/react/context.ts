import { ComponentClass, createContext } from 'react';
import type { DIContainerContextValue } from '../type';

export const DIContainerContext = createContext<DIContainerContextValue>(undefined);

export const makeSureAcceptContextType = (target: ComponentClass): void => {
  const { contextType } = target;
  const componentName = target.displayName || target.name;
  if (contextType) {
    throw new Error(
      `由于组件 \`${componentName}\` 已经设置了 contextType: ${
        contextType.displayName || '<anonymous context>'
      }\`，这会导致其中的 DI 注入失效.\n`
    );
  }

  Object.defineProperty(target, 'contextType', {
    enumerable: true,
    get() {
      return DIContainerContext;
    },
    set(value: unknown) {
      if (value !== DIContainerContext) {
        throw new Error(
          `由于使用了 DI 注入，所以禁止直接设置组件 \`${componentName}\` 的 contextType.\n`
        );
      }
    },
  });
};
