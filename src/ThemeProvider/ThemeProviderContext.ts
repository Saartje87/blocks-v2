import { createContext } from 'react';
import { Theme } from '../types/theme';

export const ThemeProviderContext = createContext<Theme | null>(null);
