import { style } from '@vanilla-extract/css';
import { vars } from '../../css/theme.css';

export const input = style({
  opacity: 0,
  height: 0,
  maxHeight: 0,
  position: 'absolute',
});

export const checkbox = style({
  transition: 'background-color 0.2s linear',
  selectors: {
    [`${input}:focus-visible + &`]: {
      outline: vars.outline.focus,
      outlineOffset: vars.outline.offset,
    },
    [`${input}:checked + &`]: {
      backgroundColor: vars.color.primary,
    },
  },
});

export const checkboxMark = style({
  width: vars.icon.size.small,
  height: vars.icon.size.small,
  color: vars.color.white,
  transform: 'scale(0)',
  transition: 'transform 0.1s ease-out',
  selectors: {
    [`${input}:checked + ${checkbox} &`]: {
      transform: 'scale(1)',
    },
  },
});
