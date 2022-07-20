import { style } from '@vanilla-extract/css';
import { vars } from '../../css/theme.css';

export const themeProvider = style({
  fontFamily: vars.fontFamily.standard,
});
