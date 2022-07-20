import { vars } from '../../css/theme.css';
import { ComponentThemes } from '../../types/theme';

type ComponentTheme<T extends keyof ComponentThemes> = {
  component: T;
} & ComponentThemes[T];

export const createComponentTheme = <T extends keyof ComponentThemes>(
  component: T,
  theme: (theme: typeof vars) => ComponentThemes[T],
): ComponentTheme<T> => {
  return {
    component,
    ...theme(vars),
  };
};
