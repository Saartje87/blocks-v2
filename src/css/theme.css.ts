import { createThemeContract } from '@vanilla-extract/css';

export const breakpoints = {
  mobile: 0,
  tablet: 740,
  desktop: 992,
  wide: 1200,
} as const;

export const vars = createThemeContract({
  space: {
    none: '',
    gutter: '',
    xsmall: '',
    small: '',
    medium: '',
    large: '',
    xlarge: '',
  },
  color: {
    white: '',
    body: '',
    primaryLight: '',
    primary: '',
    secondaryLight: '',
    secondary: '',
    text: '',
    textLight: '',
    textDark: '',
    caution: '',
    link: '',
  },
  fontFamily: {
    standard: '',
  },
  fontSize: {
    // large | regular | small | tiny
    xsmall: '',
    small: '',
    medium: '',
    large: '',
    xlarge: '',
  },
  weight: {
    medium: '',
    regular: '',
    strong: '',
  },
  // headingWeight: {
  //   medium: '500',
  //   regular: '600',
  // },
  border: {
    styles: {
      none: '',
      black: '',
    },
    radius: {
      xsmall: '',
      small: '',
      medium: '',
      large: '',
    },
  },
  shadow: {
    small: '',
    medium: '',
    large: '',
  },
  outline: {
    focus: '',
    offset: '',
  },
  icon: {
    size: {
      small: '',
      medium: '',
      large: '',
    },
  },
  // heading: {
  //   base: {
  //     fontFamily: 'standard',
  //   },
  //   h1: {
  //     fontSize: '32px',
  //   },
  //   h2: {
  //     fontSize: '24px',
  //   },
  //   h3: {
  //     fontSize: '20px',
  //   },
  //   h4: {
  //     fontSize: '16px',
  //   },
  // },
  // transition: {}
  // transform: {}
  // animation: {
  //   dialogEnter: 'dialogEnterAnimation',
  //   dialogLeave: 'dialogLeaveAnimation',
  // },
});
