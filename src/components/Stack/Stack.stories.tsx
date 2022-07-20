import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { themeContract } from '../../theme.css';
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
        options: Object.keys(themeContract.space),
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
      <div style={{ border: '1px red solid' }}>1</div>
      <div style={{ border: '1px red solid' }}>2</div>
      <div style={{ border: '1px red solid' }}>3</div>
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
      <li style={{ border: '1px red solid' }}>1</li>
      <li style={{ border: '1px red solid' }}>2</li>
      <li style={{ border: '1px red solid' }}>3</li>
      <li style={{ border: '1px red solid' }}>4</li>
      <li style={{ border: '1px red solid' }}>5</li>
      <li style={{ border: '1px red solid' }}>6</li>
      <li style={{ border: '1px red solid' }}>7</li>
      <li style={{ border: '1px red solid' }}>8</li>
      <li style={{ border: '1px red solid' }}>9</li>
    </>
  ),
};
