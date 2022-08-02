import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { vars } from '../../css/theme.css';
import { Box } from '../Box';
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
    children: {
      control: {
        type: 'none',
      },
    },
  },
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = ({ ...args }) => <Stack {...args} />;

export const Default = Template.bind({});

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await expect(canvas.getByText('3')).toBeInTheDocument();
};

Default.args = {
  gap: ['small', 'medium', 'large'],
  children: (
    <>
      <Box backgroundColor="caution" padding="small">
        1
      </Box>
      <Box backgroundColor="caution" padding="small">
        2
      </Box>
      <Box backgroundColor="caution" padding="small">
        3
      </Box>
    </>
  ),
};

// List
export const List = Template.bind({});

List.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await expect(canvas.getByText('3')).toBeInTheDocument();
  await expect(canvas.getByText('9')).toBeInTheDocument();
};

List.args = {
  gap: ['small', 'medium', 'large'],
  as: 'ol',
  children: (
    <>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </>
  ),
};
