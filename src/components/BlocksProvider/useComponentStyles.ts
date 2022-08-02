import { ComponentThemes, FlattenComponentTheme } from '../../types/theme';
import { classnames } from '../../utils/classnames';
import { useTheme } from './useTheme';

export const useComponentStyles = <T extends keyof ComponentThemes>(
  component: T,
  options: Partial<FlattenComponentTheme<ComponentThemes[T]>>,
): string | undefined => {
  const theme = useTheme();
  const componentStyles = theme[component];

  if (!componentStyles) {
    // Should be a warning, in dev mode only?
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`Component styles not found '${component}'`);
    }

    return;
  }

  const classNames: string[] = [];

  for (const key in options) {
    const styles = componentStyles[key];
    const value = options[key] as boolean | string;

    if (!styles) {
      continue;
    }

    if (options[key] === true) {
      classNames.push(styles as unknown as string);
      continue;
    }

    if ((value as string) in styles) {
      classNames.push(styles[value as keyof typeof styles] as unknown as string);
    }
  }

  return classnames(...classNames);
};
