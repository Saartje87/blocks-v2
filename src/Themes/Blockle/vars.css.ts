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
    body: '#f8f9fa',
    primary: '#4da1ff',
    secondary: '#b37912',
    text: '#323c47',
    textLight: '#939eab',
    textDark: '#939eab',
    caution: '#ffbf4d',
    link: '#4da1ff',
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
  border: {
    styles: {
      none: 'none',
      black: '1px solid #000',
    },
    radius: {
      standard: '4px',
    },
  },
});
