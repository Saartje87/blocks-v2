import { style } from '@vanilla-extract/css';
import { createComponentTheme } from '../../components/BlocksProvider/utils';

export const textInput = createComponentTheme('textInput', ({ atoms, vars }) => ({
  container: style([
    atoms({
      backgroundColor: 'white',
      borderRadius: 'medium',
      boxShadow: 'medium',
      padding: 'large',
    }),
    style({
      height: 56,
      ':focus-within': {
        outline: vars.outline.focus,
        outlineOffset: vars.outline.offset,
      },
    }),
  ]),
  input: style({
    outline: 'none',
    background: 'transparent',
    color: vars.color.text,
  }),
  label: style([
    atoms({
      color: 'text',
    }),
    {
      transform: 'translateY(0%) scale(1)',
      transformOrigin: 'top left',
      transition: 'transform 120ms ease-out, opacity 120ms linear',
      opacity: 0.8,
      selectors: {
        'input:not(:placeholder-shown) + &': {
          transform: 'translateY(-80%) scale(0.75)',
          opacity: 1,
        },
      },
    },
  ]),
}));
