import { style, styleVariants } from '@vanilla-extract/css';
import { themeContract } from '../theme.css';

export const button = style({
  appearance: 'none',
  cursor: 'pointer',
  fontFamily: 'inherit',
  outline: 'none',
  fontWeight: themeContract.weight.semiBold,
});

export const variants = styleVariants({
  flat: {
    backgroundColor: 'transparent',
    border: 'none',
  },
  solid: {
    backgroundColor: themeContract.color.primary,
    border: 'none',
  },
  solid: {
    backgroundColor: themeContract.color.primary,
    border: 'none',
  },
});
