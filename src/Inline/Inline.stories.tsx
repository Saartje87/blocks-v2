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
  },
} as ComponentMeta<typeof Inline>;

const Template: ComponentStory<typeof Inline> = ({ ...args }) => (
  <Inline {...args}>
    <div style={{ border: '1px red solid', width: '60px', height: '60px' }}>1</div>
    <div style={{ border: '1px red solid', width: '60px', height: '60px' }}>2</div>
    <div style={{ border: '1px red solid', width: '60px', height: '60px' }}>3</div>
    <div style={{ border: '1px red solid', width: '60px', height: '60px' }}>4</div>
    <div style={{ border: '1px red solid', width: '60px', height: '60px' }}>5</div>
    <div style={{ border: '1px red solid', width: '60px', height: '60px' }}>6</div>
    <div style={{ border: '1px red solid', width: '60px', height: '60px' }}>7</div>
    <div style={{ border: '1px red solid', width: '60px', height: '60px' }}>8</div>
    <div style={{ border: '1px red solid', width: '60px', height: '60px' }}>9</div>
  </Inline>
);

export const Demo = Template.bind({});

Demo.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await expect(canvas.getByText('3')).toBeInTheDocument();
};

Demo.args = {
  gap: ['small', 'medium', 'large'],
  // children: (
  //   <>
  //     <div>1</div>
  //     <div>2</div>
  //     <div>3</div>
  //   </>
  // ),
};
