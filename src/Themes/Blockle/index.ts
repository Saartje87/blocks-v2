import { Theme } from '../../types/theme';
import { button } from './button.css';
import { link } from './link.css';
import { theme as vars } from './theme.css';

export const theme: Theme = {
  vars,
  button,
  link,
  dialog: {
    // base: 'dialog',
    backdrop: 'backdrop',
    // variant: {
    //   full: 'full',
    //   auto: 'auto',
    // },
  },
};
