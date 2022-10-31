import { vars } from '@blockle/blocks-v2';
import { style } from '@vanilla-extract/css';

export const focusable = style({
  ':focus-visible': {
    outline: `1px solid ${vars.color.primary}`,
    outlineOffset: vars.outline.offset,
  },
  ':disabled': {
    opacity: 0.5,
    cursor: 'auto',
  },
  selectors: {
    '&:active:not(:disabled)': {
      transform: 'scale(0.9)',
    },
  },
});
