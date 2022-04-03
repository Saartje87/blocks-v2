import { createThemeContract } from '@vanilla-extract/css';

export const breakpoints = {
  mobile: 0,
  tablet: 740,
  desktop: 992,
  wide: 1200,
} as const;

export const vars = createThemeContract({
  space: {
    none: '0px',
    gutter: '20px',
    xsmall: '2px',
    small: '6px',
    medium: '8px',
    large: '14px',
    xlarge: '24px',
  },
  // color: {
  //   black: '#000',
  //   white: '#fff',
  //   text: '#000',
  //   contentBackground: '#ffe2b8',
  //   defaultMenuBackground: '#faa61b',
  //   footer: '#241400',
  //   bevers: '#f55b5b',
  //   kabouters: '#8cc53f',
  //   welpen: '#b6df7b',
  //   gidsen: '#00aded',
  //   verkenners: '#7bd6fa',
  //   explorers: '#ec4a31',
  //   stam: '#cfa475',
  //   oudeTak: '#c0c0c0',
  // },
  // fontFamily: {
  //   cartoon: bdCartoonShoutFont,
  //   normal: "'Sora', sans-serif",
  // },
  fontSize: {
    small: '12px',
    medium: '14px',
    large: '18px',
    xlarge: '24px',
  },
  // fontWeight: {
  //   regular: '400',
  //   bold: '600',
  // },
  // lineHeight: {
  //   medium: '1',
  //   large: '1.6',
  // },
  // border: {
  //   styles: {
  //     none: 'none',
  //     black: '1px solid #000',
  //   },
  //   radius: {
  //     standard: '6px',
  //   },
  // },
  // shadows: {
  //   backdrop: '3px 4px 0px black',
  // },
});

// export const theme = createGlobalTheme(':root', {
//   space: {
//     none: '0px',
//     gutter: '20px',
//     xsmall: '2px',
//     small: '6px',
//     medium: '8px',
//     large: '14px',
//     xlarge: '24px',
//   },
//   color: {
//     black: '#000',
//     white: '#fff',
//     text: '#000',
//     contentBackground: '#ffe2b8',
//     defaultMenuBackground: '#faa61b',
//     footer: '#241400',
//     bevers: '#f55b5b',
//     kabouters: '#8cc53f',
//     welpen: '#b6df7b',
//     gidsen: '#00aded',
//     verkenners: '#7bd6fa',
//     explorers: '#ec4a31',
//     stam: '#cfa475',
//     oudeTak: '#c0c0c0',
//   },
//   fontFamily: {
//     cartoon: bdCartoonShoutFont,
//     normal: "'Sora', sans-serif",
//   },
//   fontSize: {
//     small: '12px',
//     medium: '14px',
//     large: '18px',
//     xlarge: '24px',
//   },
//   fontWeight: {
//     regular: '400',
//     bold: '600',
//   },
//   lineHeight: {
//     medium: '1',
//     large: '1.6',
//   },
//   border: {
//     styles: {
//       none: 'none',
//       black: '1px solid #000',
//     },
//     radius: {
//       standard: '6px',
//     },
//   },
//   shadows: {
//     backdrop: '3px 4px 0px black',
//   },
// });
