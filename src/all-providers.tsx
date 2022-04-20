import { FC } from 'react';
import { theme } from './test-theme.css';
import { BlocksThemeProvider } from './ThemeProvider/ThemeProvider';

export const AllProviders: FC = ({ children }) => {
  return <BlocksThemeProvider theme={theme}>{children}</BlocksThemeProvider>;
};
