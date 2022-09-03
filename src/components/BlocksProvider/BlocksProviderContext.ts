import { createContext } from 'react';
import { Theme } from '../../types/theme';

export type BlocksProviderContextValue = {
  theme: Theme;
  spriteUrl: string;
};

export const BlocksProviderContext = createContext<BlocksProviderContextValue | null>(null);
