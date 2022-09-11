import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { responsiveProperties } from '../../css/sprinkles/sprinkles.css';
import { Stack } from '../Stack';
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
  level: 1,
};

const TemplateAllHeadings: ComponentStory<typeof Heading> = (args) => (
  <Stack gap="medium">
    <Heading {...args} level={1}>
      Heading 1
    </Heading>
    <Heading {...args} level={2}>
      Heading 2
    </Heading>
    <Heading {...args} level={3}>
      Heading 3
    </Heading>
    <Heading {...args} level={4}>
      Heading 4
    </Heading>
  </Stack>
);

export const All = TemplateAllHeadings.bind({});
