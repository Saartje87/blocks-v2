import { style } from '@vanilla-extract/css';
import { createComponentTheme } from '../../components/BlocksProvider/utils';

export const progressBar = createComponentTheme('progressBar', ({ atoms }) => ({
  container: style([
    atoms({
      borderRadius: 'small',
    }),
    {
      height: '4px',
    },
  ]),
  bar: style({}),
}));
