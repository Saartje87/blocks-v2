import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { vars } from '../theme.css';
import { Inline } from './Inline';

export default {
  title: 'Inline',
  component: Inline,
  argTypes: {
    gap: {
      name: 'gap',
      type: 'string',
      defaultValue: 'small',
      control: {
        type: 'select',
        options: Object.keys(vars.space),
      },
    },
    children: {
      control: {
        type: 'none',
      },
    },
  },
} as ComponentMeta<typeof Inline>;

const Template: ComponentStory<typeof Inline> = ({ ...args }) => <Inline {...args} />;

// Default
export const Default = Template.bind({});

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await expect(canvas.getByText('3')).toBeInTheDocument();
  await expect(canvas.getByText('9')).toBeInTheDocument();
};

Default.args = {
  gap: ['small', 'medium', 'large'],
  children: (
    <>
      <div style={{ border: '1px red solid', width: '60px', height: '60px' }}>1</div>
      <div style={{ border: '1px red solid', width: '60px', height: '60px' }}>2</div>
      <div style={{ border: '1px red solid', width: '60px', height: '60px' }}>3</div>
      <div style={{ border: '1px red solid', width: '60px', height: '60px' }}>4</div>
      <div style={{ border: '1px red solid', width: '60px', height: '60px' }}>5</div>
      <div style={{ border: '1px red solid', width: '60px', height: '60px' }}>6</div>
      <div style={{ border: '1px red solid', width: '60px', height: '60px' }}>7</div>
      <div style={{ border: '1px red solid', width: '60px', height: '60px' }}>8</div>
      <div style={{ border: '1px red solid', width: '60px', height: '60px' }}>9</div>
    </>
  ),
};

// List
export const List = Template.bind({});

List.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await expect(canvas.getByText('1')).toBeInTheDocument();
  await expect(canvas.getByText('2')).toBeInTheDocument();
  await expect(canvas.getByText('3')).toBeInTheDocument();
};

List.args = {
  gap: ['small', 'medium', 'large'],
  children: (
    <>
      <li style={{ border: '1px red solid', width: '60px', height: '60px' }}>1</li>
      <li style={{ border: '1px red solid', width: '60px', height: '60px' }}>2</li>
      <li style={{ border: '1px red solid', width: '60px', height: '60px' }}>3</li>
    </>
  ),
  as: 'ol',
};
