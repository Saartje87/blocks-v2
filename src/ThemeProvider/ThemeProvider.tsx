import { ReactNode } from 'react';
import { ThemeProviderContext } from './ThemeProviderContext';

export interface BlocksThemeProviderProps {
  children: ReactNode;
  theme: string;
}

export const ThemeProvider = ({ children, theme }: BlocksThemeProviderProps) => {
  return (
    <ThemeProviderContext.Provider value={theme}>
      <div className={theme}>{children}</div>
    </ThemeProviderContext.Provider>
  );
};
