import { makeTheme } from '../../utils/makeTheme';

export const themeVars = makeTheme({
  space: {
    none: '0px',
    gutter: '28px',
    xsmall: '4px',
    small: '8px',
    medium: '12px',
    large: '16px',
    xlarge: '24px',
  },
  color: {
    white: '#fff',
    body: '#F4F6FA',
    primaryLight: '#E4DFFF',
    primary: '#7265E3',
    primaryDark: '#4D3CAB',
    secondaryLight: '#7265E3',
    secondary: '#7FE3F0',
    secondaryDark: '#4D3CAB',
    text: '#2D3142',
    textLight: '#9C9EB9',
    textDark: '#4C5980',
    caution: '#FF9B90',
    link: '#7265E3',
  },
  fontFamily: {
    standard: '"Rubik", sans-serif',
  },
  // 20 | 16 | 14 | 12
  fontSize: {
    xsmall: '12px',
    small: '14px',
    medium: '16px',
    large: '20px',
    xlarge: '24px',
  },
  weight: {
    medium: '400',
    regular: '500',
    strong: '700',
  },
  border: {
    styles: {
      none: 'none',
      black: '1px solid #000',
    },
    radius: {
      xsmall: '8px',
      small: '12px',
      medium: '16px',
      large: '20px',
    },
  },
  shadow: {
    small: '0 1px 4px rgba(0, 0, 0, 0.1)',
    medium: '0px 10px 30px rgba(112, 136, 210, 0.15)',
    large: '0px 10px 30px rgba(112, 136, 210, 0.2)',
  },
  outline: {
    focus: '1px solid #7265E3',
    offset: '2px',
  },
  icon: {
    size: {
      small: '16px',
      medium: '24px',
      large: '32px',
    },
  },
});
