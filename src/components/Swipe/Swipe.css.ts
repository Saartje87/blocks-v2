import { style } from '@vanilla-extract/css';

export const swipePanel = style({
  minWidth: '100%',
  maxWidth: '100%',
  contain: 'layout',
});

export const swipeArea = style({
  transition: 'transform 0.3s ease-out',
  willChange: 'transform',
});
