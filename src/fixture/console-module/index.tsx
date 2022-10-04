import { OutputPanel as InnerOutputPanel } from '@component';
import { FC, PropsWithChildren, useMemo } from 'react';

import { DI, DIContainerContext } from '@core/di';

import { FooConsoleModule } from './foo-module';

interface Props {}

const Container: FC<PropsWithChildren<{}>> = ({ children }) => {
  const container = useMemo(() => DI.load(FooConsoleModule).createContainer(), []);

  return (
    <DIContainerContext.Provider value={container}>{children}</DIContainerContext.Provider>
  );
};

export const OutputPanel: FC<Props> = ({}) => (
  <Container>
    <InnerOutputPanel />
  </Container>
);
