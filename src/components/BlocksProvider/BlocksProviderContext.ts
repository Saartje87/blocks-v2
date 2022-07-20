import { createContext } from 'react';
import { Theme } from '../../types/theme';

export const BlocksProviderContext = createContext<Theme | null>(null);
