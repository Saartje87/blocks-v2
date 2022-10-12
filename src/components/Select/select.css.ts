import { style } from '@vanilla-extract/css';
import { vars } from '../../css/theme.css';

export const select = style({
  height: '100%',
  appearance: 'none',
  border: 'none',
  flexGrow: 1,
  ':invalid': {
    color: vars.color.textLight,
  },
});

export const placeholder = style({
  color: vars.color.textLight,
});
