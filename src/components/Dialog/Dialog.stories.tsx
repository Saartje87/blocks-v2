import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  fireEvent,
  getByPlaceholderText,
  getByRole,
  userEvent,
  within,
} from '@storybook/testing-library';
import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import { Button } from '../Button';
import { Heading } from '../Heading';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { TextField } from '../TextField';
import { Dialog } from './Dialog';

const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

export default {
  title: 'Dialog',
  component: Dialog,
  argTypes: {
    children: {
      control: {
        type: 'none',
      },
    },
    header: {
      control: {
        type: 'none',
      },
    },
    footer: {
      control: {
        type: 'none',
      },
    },
  },
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => {
  const [open, setOpen] = useState(args.open);

  useEffect(() => {
    setOpen(args.open);
  }, [args.open]);

  return (
    <>
      <Button
        variant="solid"
        onClick={() => {
          flushSync(() => {
            setOpen(true);
          });
        }}
      >
        Open Dialog
      </Button>
      <div style={{ height: '2000px' }}></div>
      <Dialog
        {...args}
        open={open}
        onRequestClose={() =>
          flushSync(() => {
            setOpen(false);
          })
        }
      />
    </>
  );
};

// Default
export const Default = Template.bind({});

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await expect(canvas.getByRole('button', { name: 'Open Dialog' })).toBeInTheDocument();
  await userEvent.click(canvas.getByRole('button', { name: 'Open Dialog' }));

  await sleep(30);

  await expect(getByRole(document.body, 'dialog')).toBeInTheDocument();
  await expect(getByPlaceholderText(document.body, 'First name')).toBeInTheDocument();
};

Default.args = {
  children: (
    <>
      <Stack gap="medium">
        <Heading level="2">Hello world!</Heading>
        <Text as="p" fontSize="small">
          This is a dialog.
        </Text>
        <form onSubmit={(event) => event.preventDefault()}>
          <Stack gap="small" align="center">
            <TextField name="firstName" placeholder="First name" />
            <Button type="submit">Submit</Button>
          </Stack>
        </form>
      </Stack>
    </>
  ),
  open: false,
};

// OpenAndClose
export const OpenAndClose = Template.bind({});

OpenAndClose.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await expect(canvas.getByRole('button', { name: 'Open Dialog' })).toBeInTheDocument();
  await userEvent.click(canvas.getByRole('button', { name: 'Open Dialog' }));

  await sleep(30);

  const dialog = getByRole(document.body, 'dialog');

  await expect(dialog).toBeInTheDocument();

  await sleep(30);
  await fireEvent.keyDown(document.body, { key: 'Escape' });

  await sleep(300);
  await expect(dialog).not.toBeInTheDocument();
};

OpenAndClose.args = {
  children: (
    <>
      <Stack gap="medium">
        <Heading level="2">Hello world!</Heading>
        <Text as="p" fontSize="small">
          This is a dialog.
        </Text>
        <form onSubmit={(event) => event.preventDefault()}>
          <Stack gap="small" align="center">
            <TextField name="firstName" placeholder="First name" />
            <Button type="submit" variant="flat">
              Submit
            </Button>
          </Stack>
        </form>
      </Stack>
    </>
  ),
  open: false,
};
