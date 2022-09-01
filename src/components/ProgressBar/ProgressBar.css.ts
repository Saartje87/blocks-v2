import { styleVariants } from '@vanilla-extract/css';

export const transitions = styleVariants({
  slow: {
    transition: 'transform 400ms ease-out',
  },
  fast: {
    transition: 'transform 180ms ease-out',
  },
});
