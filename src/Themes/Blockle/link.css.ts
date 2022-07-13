import { style } from '@vanilla-extract/css';
import { createComponentTheme } from '../../ThemeProvider/utils';

export const link = createComponentTheme('link', (vars) => ({
  base: style({
    outline: 'none',
    border: 'none',
    textDecoration: 'none',
    color: vars.color.primary,
    borderRadius: vars.border.radius.standard,
    ':hover': {
      color: vars.color.secondary,
    },
    ':focus-visible': {
      outline: vars.outline.focus,
    },
  }),
}));
