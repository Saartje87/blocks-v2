import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { ProgressBar } from './ProgressBar';

export default {
  title: 'ProgressBar',
  component: ProgressBar,
  argTypes: {
    value: {
      name: 'Value',
      description: 'Progress bar value',
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
  },
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await expect(canvas.getByText('ProgressBar')).toBeInTheDocument();
};

Default.args = {
  value: 50,
};
