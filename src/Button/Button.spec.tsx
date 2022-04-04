import { render } from '../test-utils';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Button.stories';

describe('Button', () => {
  const { Demo } = composeStories(stories);

  // it('should render', () => {
  //   const { getByText } = render(<Button>Hello</Button>);

  //   expect(getByText('Hello')).toBeInTheDocument();
  // });

  it('should render with storybook', () => {
    const { getByText } = render(<Demo />);

    expect(getByText('Button')).toBeInTheDocument();
  });
});
