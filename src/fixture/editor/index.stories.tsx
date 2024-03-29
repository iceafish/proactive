import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FooStage } from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Fixtures/Vinci',
  component: FooStage,
  argTypes: {},
} as ComponentMeta<typeof FooStage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FooStage> = (args) => <FooStage {...args} />;

export const Editor = Template.bind({});

Editor.args = {
  draggable: true,
};
