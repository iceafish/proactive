import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { App } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Diagram/App',
  component: App,
  argTypes: {},
} as ComponentMeta<typeof App>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof App> = (args) => <App {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  draggable: true,
};
