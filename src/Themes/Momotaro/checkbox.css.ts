import { style } from '@vanilla-extract/css';
import { createComponentTheme } from '../../components/BlocksProvider/utils';

export const checkbox = createComponentTheme('checkbox', ({ atoms }) => ({
  checkbox: style([
    atoms({
      backgroundColor: 'primaryLight',
      borderRadius: 'xsmall',
    }),
    style({
      width: 24,
      height: 24,
    }),
  ]),
}));
