import { createComponentTheme } from '@blockle/blocks-v2';
import { style } from '@vanilla-extract/css';

export const progressBar = createComponentTheme('progressBar', ({ atoms }) => ({
  container: style([
    atoms({
      borderRadius: 'small',
    }),
    {
      height: '4px',
    },
  ]),
  bar: style({}),
}));
