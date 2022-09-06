import { style, styleVariants } from '@vanilla-extract/css';
import { createComponentTheme } from '../../components/BlocksProvider/utils';
import { focusable } from './utils.css';

export const button = createComponentTheme('button', ({ atoms, vars }) => ({
  base: style([
    atoms({
      display: 'inline-flex',
      placeItems: 'center',
      paddingX: 'xlarge',
      paddingY: 'large',
      fontSize: 'medium',
      borderRadius: 'medium',
    }),
    focusable,
  ]),
  variant: styleVariants({
    flat: [
      atoms({
        color: 'primary',
      }),
      {
        border: 'none',
        background: 'transparent',
        selectors: {
          '&:hover:not(:disabled)': {
            backgroundColor: vars.color.primaryLight,
          },
        },
      },
    ],
    solid: [
      atoms({
        color: 'white',
        backgroundColor: 'primary',
      }),
      {
        border: 'none',
        selectors: {
          '&:hover:not(:disabled)': {
            backgroundColor: vars.color.primaryDark,
          },
        },
      },
    ],
  }),
}));
