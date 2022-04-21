import { useContext } from 'react';
import { ThemeProviderContext } from './ThemeProviderContext';

export const useTheme = (): string => {
  const theme = useContext(ThemeProviderContext);

  if (!theme) {
    throw new Error(
      'ThemeProviderContext not found, please add <ThemeProvider theme="THEME"> to your component tree',
    );
  }

  return theme;
};
