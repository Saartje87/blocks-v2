import { style, styleVariants } from '@vanilla-extract/css';
import { createComponentTheme } from '../../components/BlocksProvider/utils';

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
    {
      ':active': {
        transform: 'scale(0.9)',
      },
      ':focus-visible': {
        outline: `1px solid ${vars.color.primary}`,
        outlineOffset: '2px',
      },
      ':disabled': {
        opacity: 0.5,
        cursor: 'auto',
      },
    },
  ]),
  variant: styleVariants({
    flat: [
      atoms({
        color: 'primary',
      }),
      {
        border: 'none',
        background: 'transparent',
        '&:hover:not(:disabled)': {
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
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
        '&:hover:not(:disabled)': {
          backgroundColor: '#8C80F8',
        },
      },
    ],
  }),
}));
