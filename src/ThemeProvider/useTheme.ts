import { useContext } from 'react';
import { Theme } from '../types/theme';
import { ThemeProviderContext } from './ThemeProviderContext';

export const useTheme = (): Theme => {
  const theme = useContext(ThemeProviderContext);

  if (!theme) {
    throw new Error(
      'ThemeProviderContext not found, please add <ThemeProvider theme="THEME"> to your component tree',
    );
  }

  return theme;
};
