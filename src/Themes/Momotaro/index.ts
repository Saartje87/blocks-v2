import { Theme } from '../../types/theme';
import { button } from './button.css';
import { checkbox } from './checkbox.css';
import { link } from './link.css';
import { progressBar } from './progressBar.css';
import { radio } from './radio.css';
import { textInput } from './textInput.css';
import { themeVars as vars } from './theme.css';

export const momotaroTheme: Theme = {
  vars,
  button,
  link,
  progressBar,
  checkbox,
  radio,
  textInput,
  dialog: {
    base: 'dialog',
    backdrop: 'backdrop',
  },
};
