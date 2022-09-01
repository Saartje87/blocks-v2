import { style } from '@vanilla-extract/css';

export const input = style({
  appearance: 'none',
  border: 'none',
  flexGrow: 1,
  '::placeholder': {
    color: 'transparent',
  },
});
