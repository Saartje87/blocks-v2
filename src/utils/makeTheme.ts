import { createTheme } from '@vanilla-extract/css';
import { themeContract } from '../theme.css';

// Copied from @vanilla-extract/css
declare type Primitive = string | boolean | number | null | undefined;

export type MapLeafNodes<Obj, LeafType> = {
  [Prop in keyof Obj]: Obj[Prop] extends Primitive
    ? LeafType
    : Obj[Prop] extends Record<string | number, any>
    ? MapLeafNodes<Obj[Prop], LeafType>
    : never;
};

export const makeTheme = (theme: MapLeafNodes<typeof themeContract, string>) => {
  return createTheme(themeContract, theme);
};
