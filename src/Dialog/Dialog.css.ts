import { style } from '@vanilla-extract/css';

export const dialogBackdrop = style({
  position: 'fixed',
  width: '100%',
  height: '100%',
  left: 0,
  top: 0,
  backgroundColor: 'rgba(0,0,0,0.1)',
});

export const dialog = style({
  display: 'block',
  position: 'relative',
  padding: 0,
  margin: 0,
  background: 'green',
  selectors: {
    '&:not([open])': {
      display: 'none',
    },
  },
});
