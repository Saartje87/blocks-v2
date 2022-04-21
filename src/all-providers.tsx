import { FC } from 'react';
import { theme } from './test-theme.css';
import { ThemeProvider } from './ThemeProvider/ThemeProvider';

export const AllProviders: FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
