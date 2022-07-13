import { DeepPartial } from './utils';

type FlattenComponentThemes<T> = {
  [P in keyof T]: FlattenComponentTheme<T[P]>;
};

type FlattenComponentTheme<T> = {
  [P in keyof T]: T[P] extends Record<string, string> ? keyof T[P] : boolean;
};

export type ComponentThemes = DeepPartial<{
  button: {
    base: string;
    variant: Record<'flat' | 'solid', string>;
  };
  dialog: {
    base: string;
    variant: Record<'full' | 'auto', string>;
    backdrop: string;
  };
  link: {
    base: string;
  };
}>;

export type Theme = {
  vars: string;
} & ComponentThemes;

export type ComponentThemesProps = FlattenComponentThemes<ComponentThemes>;
