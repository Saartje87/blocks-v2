import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../css/theme.css';

export const iconColor = style({
  fill: 'currentcolor',
});

export const sizes = styleVariants({
  small: {
    width: vars.icon.size.small,
    height: vars.icon.size.small,
    minWidth: vars.icon.size.small,
    minHeight: vars.icon.size.small,
  },
  medium: {
    width: vars.icon.size.medium,
    height: vars.icon.size.medium,
    minWidth: vars.icon.size.medium,
    minHeight: vars.icon.size.medium,
  },
  large: {
    width: vars.icon.size.large,
    height: vars.icon.size.large,
    minWidth: vars.icon.size.large,
    minHeight: vars.icon.size.large,
  },
});
