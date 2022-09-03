import { createTheme } from '@vanilla-extract/css';
import { vars } from '../css/theme.css';

// Copied from @vanilla-extract/css
declare type Primitive = string | boolean | number | null | undefined;

export type MapLeafNodes<Obj, LeafType> = {
  [Prop in keyof Obj]: Obj[Prop] extends Primitive
    ? LeafType
    : Obj[Prop] extends Record<string | number, unknown>
    ? MapLeafNodes<Obj[Prop], LeafType>
    : never;
};

export const makeTheme = (theme: MapLeafNodes<typeof vars, string>) => {
  return createTheme(vars, theme);
};
