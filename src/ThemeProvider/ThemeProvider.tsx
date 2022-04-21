import { ReactNode, useLayoutEffect } from 'react';
import { getRootElement } from '../utils/rootElement';

export interface BlocksThemeProviderProps {
  children: ReactNode;
  theme: string;
}

export const ThemeProvider = ({ children, theme }: BlocksThemeProviderProps) => {
  useLayoutEffect(() => {
    getRootElement().classList.add(theme);

    return () => {
      getRootElement().classList.remove(theme);
    };
  }, [theme]);

  return <>{children}</>;
};
