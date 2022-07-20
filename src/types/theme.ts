import { ButtonProps } from '../Button';

type FlattenComponentThemes<T> = {
  [P in keyof T]: FlattenComponentTheme<T[P]>;
};

type FlattenComponentTheme<T> = {
  [P in keyof T]: T[P] extends Record<string, string> ? keyof T[P] : boolean;
};

export type ComponentThemes = {
  button: {
    base: string;
    variant: Record<NonNullable<ButtonProps['variant']>, string>;
  };
  dialog: {
    base: string;
    backdrop: string;
  };
  link: {
    base: string;
  };
};

export type Theme = {
  vars: string;
} & ComponentThemes;

export type ComponentThemesProps = FlattenComponentThemes<ComponentThemes>;
