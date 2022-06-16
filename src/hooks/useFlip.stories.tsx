import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { FC, useState } from 'react';
import { Box } from '../Box';
import { Button } from '../Button';
import { Inline } from '../Inline';
import { Stack } from '../Stack';
import { useFlip } from './useFlip';

const generateId = () => Math.random().toString(36).substring(7);

function shuffleArray(items: string[]) {
  const array = [...items];

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

const FlipDemo: FC = () => {
  const [items, setItems] = useState<string[]>(['a', 'b', 'c', 'd', 'e']);
  const { setRef, remove } = useFlip();

  return (
    <Stack gap="large" padding="gutter">
      <Inline gap="medium">
        <Button
          onClick={() => {
            setItems((items) => shuffleArray(items));
          }}
        >
          Shuffle
        </Button>
        <Button
          onClick={() => {
            setItems((items) => [generateId(), ...items]);
          }}
        >
          Add
        </Button>
        <Button
          onClick={() => {
            setItems((items) => {
              const target = (Math.random() * items.length) >> 0;
              const left = items.slice(0, target);
              const right = items.slice(target);

              return [...left, generateId(), ...right];
            });
          }}
        >
          Add random
        </Button>
      </Inline>
      <Stack gap="medium">
        {items.map((key) => (
          <Box
            key={key}
            ref={setRef(key)}
            backgroundColor="caution"
            padding="medium"
            onClick={() => remove(key, () => setItems(items.filter((v) => v !== key)))}
          >
            {key}
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};

export default {
  title: 'useFlip',
  component: FlipDemo,
  argTypes: {},
} as ComponentMeta<typeof FlipDemo>;

const Template: ComponentStory<typeof FlipDemo> = (args) => <FlipDemo {...args} />;

export const Default = Template.bind({});

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await expect(canvas.getByText('Box')).toBeInTheDocument();
};

Default.args = {};
