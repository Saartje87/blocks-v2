import { style } from '@vanilla-extract/css';
import { atoms } from '../../css/sprinkles/sprinkles.css';
import { vars } from '../../css/theme.css';

export const input = style({
  opacity: 0,
  height: 0,
  maxHeight: 0,
  position: 'absolute',
});

export const radio = style({
  transition: 'background-color 0.2s linear',
  selectors: {
    [`${input}:focus-visible + &`]: {
      outline: vars.outline.focus,
      outlineOffset: '2px',
    },
    [`${input}:checked + &`]: {
      backgroundColor: vars.color.primary,
    },
  },
});

export const radioMark = style([
  atoms({
    backgroundColor: 'white',
  }),
  {
    width: vars.icon.size.small,
    height: vars.icon.size.small,
    borderRadius: '50%',
    transform: 'scale(0)',
    transition: 'transform 0.2s ease-in-out',
    selectors: {
      [`${input}:checked + ${radio} &`]: {
        transform: 'scale(1)',
      },
    },
  },
]);
