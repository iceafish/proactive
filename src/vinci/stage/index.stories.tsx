import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Stage } from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Diagram/Stage',
  component: Stage,
  argTypes: {},
} as ComponentMeta<typeof Stage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Stage> = (args) => <Stage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  draggable: true,
};
