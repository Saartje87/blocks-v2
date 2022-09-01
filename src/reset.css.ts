import { globalStyle } from '@vanilla-extract/css';

globalStyle(':where(html)', {
  lineHeight: 1.15,
  boxSizing: 'border-box',
});

globalStyle(':where(*, *::before, *::after)', {
  boxSizing: 'inherit',
});

globalStyle(':where(body)', {
  margin: 0,
  padding: 0,
  fontFamily: 'Calibri, sans-serif',
});

globalStyle(':where(button, input, optgroup, select, textarea)', {
  fontFamily: 'inherit',
  fontSize: '100%',
  lineHeight: 1.15,
  margin: 0,
  padding: 0,
});

globalStyle(':where(ul, ol)', {
  margin: 0,
  padding: 0,
});
