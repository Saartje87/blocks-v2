import { Atoms } from '../css/sprinkles/sprinkles.css';
import { breakpoints } from '../css/theme.css';

export type BreakpointKeys = keyof typeof breakpoints;

export type ResponsiveValue<T> = T | [T] | [T, T] | [T, T, T] | [T, T, T, T];

export type ResponsiveDisplayFlex = ResponsiveValue<'none' | 'flex' | 'inline-flex'>;

export type MarginAtoms = {
  margin?: Atoms['margin'];
  marginLeft?: Atoms['marginLeft'];
  marginRight?: Atoms['marginRight'];
  marginTop?: Atoms['marginTop'];
  marginBottom?: Atoms['marginBottom'];
  marginX?: Atoms['marginX'];
  marginY?: Atoms['marginY'];
};

export type PaddingAtoms = {
  padding?: Atoms['padding'];
  paddingLeft?: Atoms['paddingLeft'];
  paddingRight?: Atoms['paddingRight'];
  paddingTop?: Atoms['paddingTop'];
  paddingBottom?: Atoms['paddingBottom'];
  paddingX?: Atoms['paddingX'];
  paddingY?: Atoms['paddingY'];
};

export type MarginAndPaddingAtoms = MarginAtoms & PaddingAtoms;
