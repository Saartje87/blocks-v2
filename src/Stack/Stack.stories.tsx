import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { vars } from '../theme.css';
import { Stack } from './Stack';

export default {
  title: 'Stack',
  component: Stack,
  argTypes: {
    gap: {
      name: 'gap',
      type: 'string',
      defaultValue: 'small',
      control: {
        type: 'radio',
        options: Object.keys(vars.space),
      },
    },
  },
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = ({ ...args }) => (
  <Stack {...args}>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </Stack>
);

export const Demo = Template.bind({});

Demo.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await expect(canvas.getByText('3')).toBeInTheDocument();
};

Demo.args = {
  gap: ['small', 'medium', 'large'],
};
