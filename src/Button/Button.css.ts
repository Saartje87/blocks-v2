import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const button = style({
  appearance: 'none',
  cursor: 'pointer',
  ':disabled': {
    opacity: 0.5,
  },
  selectors: {
    '&:hover:not(:disabled)': {
      transform: 'scale(1.1)',
    },
  },
});

export const disabled = style({
  appearance: 'none',
});

export const variants = styleVariants({
  transparent: {
    backgroundColor: 'transparent',
    border: 'none',
  },
  solid: {
    backgroundColor: vars.color.dark,
    color: vars.color.light,
    border: 'none',
  },
});

export const tones = styleVariants({
  light: {},
  dark: {},
});
