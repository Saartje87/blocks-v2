import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { Stack } from '../Stack';
import { Checkbox } from './Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {},
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Stack gap="medium">
    <Checkbox {...args} name="foo" />
    <Checkbox {...args} name="bar" />
    <Checkbox {...args} name="baz" />
  </Stack>
);

export const Default = Template.bind({});

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await expect(canvas.getByText('Checkbox')).toBeInTheDocument();
};

Default.args = {
  label: 'Checkbox',
};
