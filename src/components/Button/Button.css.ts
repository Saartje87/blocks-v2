import { style } from '@vanilla-extract/css';
import { vars } from '../../css/theme.css';

export const buttonReset = style({
  appearance: 'none',
  cursor: 'pointer',
  fontFamily: 'inherit',
  outline: 'none',
  fontWeight: vars.weight.regular,
});
