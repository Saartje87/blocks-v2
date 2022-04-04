import { expect } from '@storybook/jest';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';

import { Box } from './Box';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Box',
  component: Box,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Box>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Demo = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Demo.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await expect(canvas.getByText('Box')).toBeInTheDocument();
};

Demo.args = {
  children: 'Box',
  padding: ['small', 'medium', 'large'],
};
