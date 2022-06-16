import { makeTheme } from '../../utils/makeTheme';

export const theme = makeTheme({
  space: {
    none: '0px',
    gutter: '20px',
    xsmall: '4px',
    small: '8px',
    medium: '12px',
    large: '16px',
    xlarge: '20px',
  },
  color: {
    white: '#fff',
    body: '#f8f9fa',
    primary: '#3fc4f1',
    secondary: '#3199b5',
    text: '#092c4c',
    textLight: '#939eab',
    textDark: '#939eab',
    caution: '#ffbf4d',
    link: '#4da1ff',
  },
  fontFamily: {
    standard: '"Poppins", sans-serif',
  },
  fontSize: {
    small: '14px',
    medium: '16px',
    large: '20px',
    xlarge: '24px',
  },
  weight: {
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
      standard: '4px',
    },
  },
  shadow: {
    weak: '0 1px 4px rgba(0,0,0,0.12)',
    standard: '0 3px 6px rgba(0,0,0,0.16)',
    strong: '0 10px 20px rgba(0,0,0,0.19)',
  },
  outline: {
    focus: '2px solid #3fc4f1',
  },
});
