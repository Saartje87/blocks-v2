import { style } from '@vanilla-extract/css';
import { themeContract } from '../../theme.css';

export const buttonReset = style({
  appearance: 'none',
  cursor: 'pointer',
  fontFamily: 'inherit',
  outline: 'none',
  fontWeight: themeContract.weight.regular,
});
