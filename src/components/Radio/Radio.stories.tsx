import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { Stack } from '../Stack';
import { Radio } from './Radio';

export default {
  title: 'Radio',
  component: Radio,
  argTypes: {},
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => (
  <fieldset>
    <Stack gap="medium">
      <Radio {...args} name="foo" />
      <Radio {...args} name="foo" />
      <Radio {...args} name="foo" />
    </Stack>
  </fieldset>
);

export const Default = Template.bind({});

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await expect(canvas.getByText('Radio')).toBeInTheDocument();
};

Default.args = {
  label: 'Radio',
};
