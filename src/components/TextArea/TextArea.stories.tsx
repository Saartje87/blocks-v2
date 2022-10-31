import { ComponentMeta, ComponentStory } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { TextArea } from './TextArea';

export default {
  title: 'TextArea',
  component: TextArea,
  argTypes: {},
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;

export const Default = Template.bind({});

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(canvas.getByLabelText('WockleBender'), 'Wockle');
};

Default.args = {
  name: 'foo',
  label: 'WockleBender',
  placeholder: 'TextArea a value',
  required: true,
};

export const AutoGrow = Template.bind({});

AutoGrow.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(
    canvas.getByLabelText('AutoGrow'),
    'WockleBender.\n\nWockleBender?\n\nWockleBender!',
    {
      delay: 20,
    },
  );
};

AutoGrow.args = {
  name: 'foo',
  label: 'AutoGrow',
  placeholder: 'TextArea a value',
  required: true,
  autoGrow: true,
};
