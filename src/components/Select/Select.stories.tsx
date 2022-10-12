import { ComponentMeta, ComponentStory } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { Select } from './Select';

export default {
  title: 'Select',
  component: Select,
  argTypes: {},
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
  <Select {...args}>
    <option value="A">A</option>
    <option value="B">B</option>
  </Select>
);

export const Default = Template.bind({});

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.selectOptions(canvas.getByLabelText('WockleBender'), 'B');
};

Default.args = {
  name: 'foo',
  label: 'WockleBender',
  placeholder: 'Select a value',
  required: true,
};
