import { createComponentTheme } from '@blockle/blocks-v2';
import { style } from '@vanilla-extract/css';
import { focusable } from './utils.css';

export const iconButton = createComponentTheme('iconButton', ({ atoms, vars }) => ({
  base: style([
    atoms({
      borderRadius: 'xsmall',
    }),
    focusable,
    {
      selectors: {
        '&:hover:not(:disabled)': {
          backgroundColor: vars.color.primaryLight,
        },
      },
    },
    // },
  ]),
}));
