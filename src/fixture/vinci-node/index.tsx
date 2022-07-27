import { Component, FC, PropsWithChildren, ReactNode, useMemo } from 'react';

import { DI, DIContainerContext, inject } from '@core/di';
import { IStageManager } from '@vinci';

import { VinciNodeModule } from './vinci-node-module';

const Container: FC<PropsWithChildren<{}>> = ({ children }) => {
  const container = useMemo(() => DI.load(VinciNodeModule).createContainer(), []);

  return (
    <DIContainerContext.Provider value={container}>{children}</DIContainerContext.Provider>
  );
};

class StageContainer extends Component {
  @inject(IStageManager)
  private stageManager: IStageManager;

  override render(): ReactNode {
    return this.stageManager.render();
  }
}

export const FooVinciNode: FC = () => (
  <div style={{ width: '100%', height: 400 }}>
    <Container>
      <StageContainer />
    </Container>
  </div>
);
