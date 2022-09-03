import { style, styleVariants } from '@vanilla-extract/css';

export const iconColor = style({
  fill: 'currentcolor',
});

export const sizes = styleVariants({
  small: {
    width: '16px',
    height: '16px',
  },
  medium: {
    width: '24px',
    height: '24px',
  },
  large: {
    width: '32px',
    height: '32px',
  },
});
