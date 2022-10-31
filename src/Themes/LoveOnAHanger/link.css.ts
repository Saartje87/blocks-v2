import { style } from '@vanilla-extract/css';
import { createComponentTheme } from '../../components/BlocksProvider/createComponentTheme';

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
