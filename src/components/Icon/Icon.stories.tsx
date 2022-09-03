import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { Icon } from './Icon';

export default {
  title: 'Icon',
  component: Icon,
  argTypes: {},
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => (
  <>
    <Icon {...args} />
  </>
);

export const Default = Template.bind({});

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await expect(canvas.getByText('Icon')).toBeInTheDocument();
};

Default.args = {
  name: 'arrowdown',
  size: 'medium',
  color: 'primary',
};
