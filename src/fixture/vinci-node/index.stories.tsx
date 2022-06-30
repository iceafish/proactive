import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FooVinciNode } from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Fixtures/Vinci',
  component: FooVinciNode,
  argTypes: {},
} as ComponentMeta<typeof FooVinciNode>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FooVinciNode> = (args) => <FooVinciNode {...args} />;

export const Node = Template.bind({});

Node.args = {};
