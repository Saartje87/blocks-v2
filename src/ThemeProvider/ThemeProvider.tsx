import { ReactNode } from 'react';
import { classnames } from '../utils/classnames';
import * as styles from './ThemeProvider.css';
import { ThemeProviderContext } from './ThemeProviderContext';

export interface BlocksThemeProviderProps {
  children: ReactNode;
  theme: string;
}

export const ThemeProvider = ({ children, theme }: BlocksThemeProviderProps) => {
  return (
    <ThemeProviderContext.Provider value={theme}>
      <div className={classnames(theme, styles.themeProvider)}>{children}</div>
    </ThemeProviderContext.Provider>
  );
};
