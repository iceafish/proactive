import { Component, FC, PropsWithChildren, ReactNode, useMemo } from 'react';
import { DI, DIContainerContext, inject } from '@core/di';
import { IVinciStageManager } from '@vinci';
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
  @inject(IVinciStageManager)
  private vinciStageManager: IVinciStageManager;

  override render(): ReactNode {
    return this.vinciStageManager.render(this.props.draggable);
  }
}

export const FooStage: FC<Props> = ({ draggable }) => (
  <Container>
    <StageContainer draggable={draggable} />
  </Container>
);
