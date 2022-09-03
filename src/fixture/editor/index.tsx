import { Component, FC, PropsWithChildren, ReactNode, useMemo } from 'react';

import { DI, DIContainerContext, inject } from '@core/di';
import { IStageManager } from '@vinci';

import { FooModule } from './foo-module';

interface Props {
  draggable: boolean;
}

const Container: FC<PropsWithChildren<{}>> = ({ children }) => {
  const container = useMemo(() => DI.load(FooModule).createContainer(), []);

  return (
    <DIContainerContext.Provider value={container}>{children}</DIContainerContext.Provider>
  );
};

class StageContainer extends Component<Props> {
  @inject(IStageManager)
  private stageManager: IStageManager;

  override render(): ReactNode {
    return this.stageManager.render(this.props.draggable);
  }
}

export const FooStage: FC<Props> = ({ draggable }) => (
  <Container>
    <StageContainer draggable={draggable} />
  </Container>
);
