import { ComponentMeta, ComponentStory } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { TextField } from './TextField';

export default {
  title: 'TextField',
  component: TextField,
  argTypes: {},
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

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
