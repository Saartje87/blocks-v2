import { ComponentMeta, ComponentStory } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { TextInput } from './TextInput';

export default {
  title: 'TextInput',
  component: TextInput,
  argTypes: {},
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(canvas.getByPlaceholderText('Email'), 'email@provider.com', {
    delay: 20,
  });
};

Default.args = {
  name: 'email',
  placeholder: 'Email',
};
