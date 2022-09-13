import { style } from '@vanilla-extract/css';
import { createComponentTheme } from '../../components/BlocksProvider/createComponentTheme';

export const radio = createComponentTheme('radio', ({ atoms }) => ({
  radio: style([
    atoms({
      backgroundColor: 'primaryLight',
    }),
    style({
      width: 24,
      height: 24,
      borderRadius: '50%',
    }),
  ]),
}));
