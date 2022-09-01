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
      outlineOffset: '2px',
    },
    [`${input}:checked + &`]: {
      backgroundColor: vars.color.primary,
    },
  },
});

export const checkboxMark = style({
  width: vars.icon.size.medium,
  height: vars.icon.size.medium,
  color: vars.color.white,
  transform: 'scale(0)',
  transition: 'transform 0.2s ease-in-out',
  selectors: {
    [`${input}:checked + ${checkbox} &`]: {
      transform: 'scale(1)',
    },
  },
});
