import { globalStyle } from '@vanilla-extract/css';
import { buttonStyles } from '../../Button';
import { vars } from '../../theme.css';

globalStyle(buttonStyles.button, {
  borderRadius: vars.border.radius.standard,
});

globalStyle(`${buttonStyles.button}:disabled`, {
  opacity: 0.5,
});

globalStyle(`${buttonStyles.button}:focus-visible`, {
  boxShadow: `0 0 0 1px ${vars.color.body}, 0 0 0 2px ${vars.color.primary}`,
});

// Variants - Solid
globalStyle(`${buttonStyles.variants.solid}:hover, ${buttonStyles.variants.solid}:active`, {
  backgroundColor: vars.color.secondary,
});

// Variants - Transparent
globalStyle(buttonStyles.variants.transparent, {
  backgroundColor: vars.color.body,
  boxShadow: `inset 0 0 0 2px ${vars.color.primary}`,
});

globalStyle(
  `${buttonStyles.variants.transparent}:hover, ${buttonStyles.variants.transparent}:active`,
  {
    boxShadow: `inset 0 0 0 3px ${vars.color.primary}`,
  },
);

globalStyle(`${buttonStyles.variants.transparent}:focus-visible`, {
  boxShadow: `0 0 0 2px ${vars.color.primary}`,
});
