import { FC } from 'react';
import { BlocksProvider } from './components/BlocksProvider/BlocksProvider';
import { theme } from './Themes/Blockle';

export const AllProviders: FC = ({ children }) => {
  return <BlocksProvider theme={theme}>{children}</BlocksProvider>;
};
