import { globalStyle } from '@vanilla-extract/css';
import { buttonStyles } from '../../Button';
import { themeContract } from '../../theme.css';

globalStyle(buttonStyles.button, {
  borderRadius: themeContract.border.radius.standard,
  textTransform: 'uppercase',
  fontSize: themeContract.fontSize.small,
});

globalStyle(`${buttonStyles.button}:disabled`, {
  opacity: 0.5,
});

globalStyle(`${buttonStyles.button}:focus-visible`, {
  boxShadow: `0 0 0 1px ${themeContract.color.body}, 0 0 0 2px ${themeContract.color.primary}`,
});

// Variants - Solid
globalStyle(buttonStyles.variants.solid, {
  color: '#fff',
});

globalStyle(`${buttonStyles.variants.solid}:hover, ${buttonStyles.variants.solid}:active`, {
  backgroundColor: themeContract.color.secondary,
});

// Variants - Flat
globalStyle(buttonStyles.variants.flat, {
  color: themeContract.color.primary,
});

globalStyle(`${buttonStyles.variants.flat}:hover, ${buttonStyles.variants.flat}:active`, {
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
});

globalStyle(`${buttonStyles.variants.flat}:focus-visible`, {
  outline: themeContract.outline.focus,
});
