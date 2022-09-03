import { useContext } from 'react';
import { BlocksProviderContext, BlocksProviderContextValue } from './BlocksProviderContext';

export const useBlocksContext = (): BlocksProviderContextValue => {
  const context = useContext(BlocksProviderContext);

  if (!context) {
    throw new Error(
      'BlocksProviderContext not found. Add <BlocksProvider theme="THEME"> to your component tree',
    );
  }

  return context;
};
