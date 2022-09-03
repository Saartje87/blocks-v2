import { Theme } from '../../types/theme';
import { useBlocksContext } from './useBlocksContext';

export const useTheme = (): Theme => {
  const { theme } = useBlocksContext();

  return theme;
};
