import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { responsiveProperties } from '../sprinkles/sprinkles.css';
import { vars } from '../theme.css';
import { Text } from './Text';

export default {
  title: 'Text',
  component: Text,
  argTypes: {
    fontSize: {
      name: 'fontSize',
      type: 'string',
      defaultValue: 'small',
      control: {
        type: 'radio',
        options: Object.keys(vars.fontSize),
      },
    },
    textAlign: {
      name: 'textAlign',
      type: 'string',
      control: {
        type: 'radio',
        options: Object.keys(responsiveProperties.styles.textAlign.values),
      },
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Demo = Template.bind({});

Demo.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await expect(
    canvas.getByText('Lorem Ipsum is simply dummy text of the printing and typesetting industry.'),
  ).toBeInTheDocument();
};

Demo.args = {
  children: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  fontFamily: 'standard',
};
