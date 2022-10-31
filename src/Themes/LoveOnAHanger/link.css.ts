import { createComponentTheme } from '@blockle/blocks-v2';
import { style } from '@vanilla-extract/css';

export const link = createComponentTheme('link', ({ vars }) => ({
  base: style({
    outline: 'none',
    border: 'none',
    textDecoration: 'none',
    color: vars.color.primary,
    ':hover': {
      color: vars.color.secondary,
    },
    ':focus-visible': {
      outline: vars.outline.focus,
    },
  }),
}));
