import { FC } from 'react';
import { BlocksThemeProvider } from './BlocksThemeProvider/BlocksThemeProvider';

import { theme } from './test-theme.css';

export const AllProviders: FC = ({ children }) => {
  return <BlocksThemeProvider theme={theme}>{children}</BlocksThemeProvider>;
};
