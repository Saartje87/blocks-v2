import { FC } from 'react';
import { ThemeProvider } from './ThemeProvider/ThemeProvider';
import { theme } from './Themes/Blockle';

export const AllProviders: FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
