import { ComponentMeta, ComponentStory } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { Stack } from '../Stack';
import { TextInput } from './TextInput';

export default {
  title: 'TextInput',
  component: TextInput,
  argTypes: {},
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => (
  <Stack gap="medium">
    <TextInput {...args} />
    <TextInput {...args} label="First name" />
    <TextInput {...args} label="Last name" />
    <TextInput {...args} label="Password" type="password" right="👀" />
    <TextInput {...args} label="Disabled" disabled left="📙" />
  </Stack>
);

export const Default = Template.bind({});

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(canvas.getByLabelText('Email'), 'email@provider.com', {
    delay: 20,
  });
};

Default.args = {
  name: 'email',
  type: 'email',
  label: 'Email',
};
