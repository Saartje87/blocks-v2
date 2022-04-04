import { render } from '../test-utils';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Box.stories';

describe('Box', () => {
  const { Demo } = composeStories(stories);

  it('should render', () => {
    const { getByText } = render(
      <Demo as="div" padding={['small', 'medium', 'large']}>
        Hello
      </Demo>,
    );

    expect(getByText('Hello1')).toBeInTheDocument();
  });
});
