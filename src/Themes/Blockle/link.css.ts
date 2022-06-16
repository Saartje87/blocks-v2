import { globalStyle } from '@vanilla-extract/css';
import { linkStyles } from '../..';
import { themeContract } from '../../theme.css';

globalStyle(linkStyles.link, {
  outline: 'none',
  border: 'none',
  textDecoration: 'none',
  color: themeContract.color.primary,
  borderRadius: themeContract.border.radius.standard,
});

globalStyle(`${linkStyles.link}:hover`, {
  color: themeContract.color.secondary,
});

globalStyle(`${linkStyles.link}:focus-visible`, {
  outline: themeContract.outline.focus,
});
