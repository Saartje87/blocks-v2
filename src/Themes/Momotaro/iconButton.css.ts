import { style } from '@vanilla-extract/css';
import { createComponentTheme } from '../../components/BlocksProvider/createComponentTheme';
import { focusable } from './utils.css';

export const iconButton = createComponentTheme('iconButton', ({ atoms, vars }) => ({
  base: style([
    atoms({
      borderRadius: 'xsmall',
    }),
    focusable,
    {
      selectors: {
        '&:hover:not(:disabled)': {
          backgroundColor: vars.color.primaryLight,
        },
      },
    },
  ]),
}));
