import { useContext } from 'react';
import { Theme } from '../../types/theme';
import { BlocksProviderContext } from './BlocksProviderContext';

export const useTheme = (): Theme => {
  const theme = useContext(BlocksProviderContext);

  if (!theme) {
    throw new Error(
      'BlocksProviderContext not found, please add <BlocksProvider theme="THEME"> to your component tree',
    );
  }

  return theme;
};
