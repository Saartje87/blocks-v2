import { ReactNode } from 'react';
import { Theme } from '../types/theme';
import { classnames } from '../utils/classnames';
import * as styles from './ThemeProvider.css';
import { ThemeProviderContext } from './ThemeProviderContext';

export interface BlocksThemeProviderProps {
  children: ReactNode;
  theme: Theme;
}

export const ThemeProvider = ({ children, theme }: BlocksThemeProviderProps) => {
  return (
    <ThemeProviderContext.Provider value={theme}>
      <div className={classnames(theme.vars, styles.themeProvider)}>{children}</div>
    </ThemeProviderContext.Provider>
  );
};
