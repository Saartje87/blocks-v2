import { Atoms } from '../css/sprinkles/sprinkles.css';

export type ResponsiveValue<T> = T | [T] | [T, T] | [T, T, T];

export type ResponsiveDisplayFlex = ResponsiveValue<'none' | 'flex' | 'inline-flex'>;

export type MarginAndPaddingAtoms = {
  padding?: Atoms['padding'];
  paddingLeft?: Atoms['paddingLeft'];
  paddingRight?: Atoms['paddingRight'];
  paddingTop?: Atoms['paddingTop'];
  paddingBottom?: Atoms['paddingBottom'];
  paddingX?: Atoms['paddingX'];
  paddingY?: Atoms['paddingY'];
};
