import { style, styleVariants } from '@vanilla-extract/css';
import { createComponentTheme } from '../../ThemeProvider/utils';

export const button = createComponentTheme('button', (vars) => ({
  base: style({
    borderRadius: vars.border.radius.standard,
    textTransform: 'uppercase',
    fontSize: vars.fontSize.small,
    ':hover': {
      background: 'red',
    },
    ':disabled': {
      opacity: 0.5,
      cursor: 'auto',
    },
    ':focus-visible': {
      outline: vars.outline.focus,
    },
  }),
  variant: styleVariants({
    flat: {
      color: vars.color.primary,
      border: 'none',
      background: 'transparent',
      ':hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
      },
    },
    solid: {
      color: '#fff',
      border: 'none',
      background: vars.color.primary,
      ':hover': {
        backgroundColor: vars.color.secondary,
      },
    },
  }),
}));
