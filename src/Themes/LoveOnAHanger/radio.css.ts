import { createComponentTheme } from '@blockle/blocks-v2';
import { style } from '@vanilla-extract/css';

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
