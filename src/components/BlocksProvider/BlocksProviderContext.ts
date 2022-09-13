import React, { createContext } from 'react';
import { Theme } from '../../types/theme';

export type BlocksProviderContextValue = {
  theme: Theme;
  spriteUrl: string;
  linkComponent?: React.ComponentType<any>;
};

export const BlocksProviderContext = createContext<BlocksProviderContextValue | null>(null);
