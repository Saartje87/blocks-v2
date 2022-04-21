import { createTheme } from '@vanilla-extract/css';
import { vars } from '../../theme.css';

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
  color: {
    light: '#4ECDC4',
    dark: '#1A535C',
  },
  fontFamily: {
    standard: '"Open Sans", sans-serif',
  },
  fontSize: {
    small: '12px',
    standard: '14px',
    large: '18px',
    xlarge: '24px',
  },
  weight: {
    regular: '400',
    medium: '500',
    strong: '700',
  },
});
