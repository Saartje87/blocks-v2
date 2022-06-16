import { createThemeContract } from '@vanilla-extract/css';

export const breakpoints = {
  mobile: 0,
  tablet: 740,
  desktop: 992,
  wide: 1200,
} as const;

export const themeContract = createThemeContract({
  space: {
    none: '0px',
    gutter: '0px',
    xsmall: '0px',
    small: '0px',
    medium: '0px',
    large: '0px',
    xlarge: '0px',
  },
  color: {
    white: '#fff',
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
    standard: '"Sora", sans-serif',
  },
  fontSize: {
    small: '12px',
    medium: '16px',
    large: '20px',
    xlarge: '24px',
  },
  weight: {
    // weak, regular, bold
    medium: '500',
    semiBold: '600',
    bold: '700',
  },
  border: {
    styles: {
      none: 'none',
      black: '1px solid #000',
    },
    radius: {
      standard: '6px',
    },
  },
  shadow: {
    weak: '0px 0px 0px 2px rgba(0,0,0,0.2)',
    standard: '0px 0px 0px 2px rgba(0,0,0,0.2)',
    strong: '0px 0px 0px 10px rgba(0,0,0,0.2)',
  },
  outline: {
    focus: '0px 0px 0px 10px rgba(0,0,0,0.2)',
  },
});
