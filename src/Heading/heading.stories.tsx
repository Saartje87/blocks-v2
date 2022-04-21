import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { responsiveProperties } from '../sprinkles/sprinkles.css';
import { Heading } from './Heading';

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    align: {
      type: 'string',
      control: {
        type: 'radio',
        options: Object.keys(responsiveProperties.styles.textAlign.values),
      },
    },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

export const Default = Template.bind({});

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await expect(
    canvas.getByText(
      'Lorem Ipsum is simply dummy Heading of the printing and typesetting industry.',
    ),
  ).toBeInTheDocument();
};

Default.args = {
  children: 'Lorem Ipsum is simply dummy Heading of the printing and typesetting industry.',
  fontFamily: 'standard',
  level: '1',
};
