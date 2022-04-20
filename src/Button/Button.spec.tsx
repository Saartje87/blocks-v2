import { composeStories } from '@storybook/testing-react';
import { render } from '../test-utils';
import * as stories from './Button.stories';

describe('Button', () => {
  const { Default } = composeStories(stories);

  it('should render with storybook', () => {
    const { getByText } = render(<Default />);

    expect(getByText('Button')).toBeInTheDocument();
  });
});
