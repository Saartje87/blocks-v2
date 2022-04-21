import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const button = style({
  appearance: 'none',
  cursor: 'pointer',
  fontFamily: 'inherit',
  outline: 'none',
});

export const variants = styleVariants({
  transparent: {
    backgroundColor: 'transparent',
    border: 'none',
    color: vars.color.text,
  },
  solid: {
    backgroundColor: vars.color.primary,
    color: vars.color.text,
    border: 'none',
  },
});
