import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { IconButton } from './IconButton';

export default {
  title: 'IconButton',
  component: IconButton,
  argTypes: {},
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <>
    <IconButton {...args} />
  </>
);

export const Default = Template.bind({});

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await expect(canvas.getByText('IconButton')).toBeInTheDocument();
};

Default.args = {
  name: 'arrow-right',
  size: 'medium',
  color: 'primary',
};
