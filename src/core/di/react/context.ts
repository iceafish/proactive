import { interfaces } from 'inversify';
import { createContext } from 'react';

export type DIContainerContextValue = interfaces.Container | undefined;

export const DIContainerContext = createContext<DIContainerContextValue>(undefined);
