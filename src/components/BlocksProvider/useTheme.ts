import { useContext } from 'react';
import { Theme } from '../../types/theme';
import { BlocksProviderContext } from './BlocksProviderContext';

export const useTheme = (): Theme => {
  const theme = useContext(BlocksProviderContext);

  if (!theme) {
    throw new Error(
      'ThemeProviderContext not found, please add <ThemeProvider theme="THEME"> to your component tree',
    );
  }

  return theme;
};
