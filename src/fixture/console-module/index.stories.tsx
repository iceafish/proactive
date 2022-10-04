import { ComponentMeta, ComponentStory } from '@storybook/react';

import { OutputPanel } from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Fixtures/OutputPanel',
  component: OutputPanel,
  argTypes: {},
} as ComponentMeta<typeof OutputPanel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof OutputPanel> = (args) => <OutputPanel {...args} />;

export const OutputPanelNormal = Template.bind({});

OutputPanelNormal.args = {};
