import { style } from '@vanilla-extract/css';
import { createComponentTheme } from '../../components/BlocksProvider/utils';

export const iconButton = createComponentTheme('iconButton', ({ atoms, vars }) => ({
  base: style([
    atoms({
      borderRadius: 'xsmall',
    }),
    {
      ':focus-visible': {
        outline: vars.outline.focus,
        outlineOffset: vars.outline.offset,
      },
      ':active': {
        transform: 'scale(0.9)',
      },
      selectors: {
        '&:hover:not(:disabled)': {
          backgroundColor: vars.color.primaryLight,
        },
      },
    },
  ]),
}));
