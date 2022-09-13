import { atoms } from '../../css/sprinkles/sprinkles.css';
import { vars } from '../../css/theme.css';
import { ComponentThemes } from '../../types/theme';

type ComponentTheme<T extends keyof ComponentThemes> = {
  component: T;
} & ComponentThemes[T];

type Options = {
  vars: typeof vars;
  atoms: typeof atoms;
};

export const createComponentTheme = <T extends keyof ComponentThemes>(
  component: T,
  callback: ({ vars }: Options) => ComponentThemes[T],
): ComponentTheme<T> => {
  return {
    component,
    ...callback({ vars, atoms }),
  };
};
