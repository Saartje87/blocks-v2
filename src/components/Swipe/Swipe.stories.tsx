import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useEffect, useState } from 'react';
import { Box } from '../Box';
import { Swipe, SwipePanel } from './';

export default {
  title: 'Swipe',
  component: Swipe,
  argTypes: {
    children: {
      control: {
        type: 'none',
      },
    },
  },
} as ComponentMeta<typeof Swipe>;

const Template: ComponentStory<typeof Swipe> = (args) => {
  const [index, setIndex] = useState(args.index);

  useEffect(() => {
    setIndex(args.index);
  }, [args.index]);

  // useEffect(() => {
  //   setInterval(
  //     () =>
  //       setIndex((index) => {
  //         if (index >= 2) {
  //           return 0;
  //         }

  //         return index + 1;
  //       }),
  //     1000,
  //   );
  // }, []);

  return (
    <Swipe
      style={{ height: '200px', border: '1px solid red' }}
      index={index}
      onIndexChange={(index) => setIndex(index)}
    >
      <SwipePanel>
        <Box overflow="auto" height="full">
          Foo {index} <button onClick={() => console.log('FOOO')}>BUTTON</button>
          <div style={{ height: '400px' }}>KREK</div>
        </Box>
      </SwipePanel>
      <SwipePanel>Bar {index}</SwipePanel>
      <SwipePanel>Baz {index}</SwipePanel>
    </Swipe>
  );
};

// Default
export const Default = Template.bind({});

// Default.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);

//   await expect(canvas.getByRole('button', { name: 'Open Dialog' })).toBeInTheDocument();
//   await userEvent.click(canvas.getByRole('button', { name: 'Open Dialog' }));

//   await sleep(30);

//   await expect(getByRole(document.body, 'dialog')).toBeInTheDocument();
//   await expect(getByPlaceholderText(document.body, 'First name')).toBeInTheDocument();
// };

Default.args = {
  index: 0,
};
