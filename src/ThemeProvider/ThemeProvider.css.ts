import { style } from '@vanilla-extract/css';
import { themeContract } from '../theme.css';

export const themeProvider = style({
  fontFamily: themeContract.fontFamily.standard,
});
