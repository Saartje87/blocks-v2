import { createTheme } from '@vanilla-extract/css';
import { vars } from './theme.css';

export const theme = createTheme(vars, {
  space: {
    none: '0px',
    gutter: '20px',
    xsmall: '2px',
    small: '6px',
    medium: '8px',
    large: '14px',
    xlarge: '24px',
  },
  fontSize: {
    small: '12px',
    medium: '14px',
    large: '18px',
    xlarge: '24px',
  },
});
