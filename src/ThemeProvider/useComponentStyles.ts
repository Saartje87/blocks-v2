import { ComponentThemesProps } from '../types/theme';
import { classnames } from '../utils/classnames';
import { useTheme } from './useTheme';

export const useComponentStyles = <T extends keyof ComponentThemesProps>(
  component: T,
  options: Partial<ComponentThemesProps[T]>,
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

  return classnames(
    // componentStyles.base,
    // TODO Fix typings
    ...Object.keys(options).map((key) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const styles = componentStyles[key];

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (options[key] === true) {
        return styles;
      }

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return styles && styles[options[key]];
    }),
  );
};
