import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { PasswordInput } from './PasswordInput';

export default {
  title: 'PasswordInput',
  component: PasswordInput,
  argTypes: {},
} as ComponentMeta<typeof PasswordInput>;

const Template: ComponentStory<typeof PasswordInput> = (args) => (
  <>
    <PasswordInput {...args} />
  </>
);

export const Default = Template.bind({});

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await expect(canvas.getByText('PasswordInput')).toBeInTheDocument();
};

Default.args = {
  label: 'Password',
  value: '123',
};
