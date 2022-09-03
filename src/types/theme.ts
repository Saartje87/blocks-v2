import { ButtonProps } from '../components/Button';

export type FlattenComponentThemes<T> = {
  [P in keyof T]: FlattenComponentTheme<T[P]>;
};

export type FlattenComponentTheme<T> = {
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
  progressBar: {
    container: string;
    bar: string;
  };
  checkbox: {
    checkbox: string;
  };
  radio: {
    radio: string;
  };
  textInput: {
    container: string;
    input: string;
    label: string;
  };
  iconButton: {
    base: string;
  };
};

export type Theme = {
  vars: string;
} & ComponentThemes;

export type ComponentThemesProps = FlattenComponentThemes<ComponentThemes>;
