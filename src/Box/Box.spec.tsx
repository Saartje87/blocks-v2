import { composeStories } from '@storybook/testing-react';
import { render } from '../test-utils';
import * as stories from './Box.stories';

describe('Box', () => {
  const { Default } = composeStories(stories);

  it('should render', () => {
    const { getByText } = render(
      <Default as="div" padding={['small', 'medium', 'large']}>
        Box content
      </Default>,
    );

    expect(getByText('Box content')).toBeInTheDocument();
  });
});
