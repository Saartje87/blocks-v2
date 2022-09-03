import { style } from '@vanilla-extract/css';
import { vars } from '../../css/theme.css';

export const input = style({
  appearance: 'none',
  border: 'none',
  flexGrow: 1,
  '::placeholder': {
    color: vars.color.textLight,
  },
});
