import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import * as stories from './Box.stories';

const { Default } = composeStories(stories);

describe('Box', () => {
  it('should render', () => {
    const { getByText } = render(
      <Default as="div" padding={['small', 'medium', 'large']}>
        Box content
      </Default>,
    );

    expect(getByText('Box content')).toBeInTheDocument();
  });
});
