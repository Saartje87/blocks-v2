import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { Divider } from './Divider';

export default {
  title: 'Divider',
  component: Divider,
  argTypes: {},
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => (
  <Stack gap="medium">
    <Text>Foo</Text>
    <Divider {...args} />
    <Text>Bar</Text>
  </Stack>
);

export const Default = Template.bind({});

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await expect(canvas.getByText('12')).toBeInTheDocument();
};

Default.args = {};
