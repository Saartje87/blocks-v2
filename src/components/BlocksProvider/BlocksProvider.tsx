import { FC, ReactNode } from 'react';
import { Theme } from '../../types/theme';
import { classnames } from '../../utils/classnames';
import * as styles from './BlocksProvider.css';
import { BlocksProviderContext } from './BlocksProviderContext';

export interface BlocksProviderProps {
  children: ReactNode;
  theme: Theme;
}

export const BlocksProvider: FC<BlocksProviderProps> = ({ children, theme }) => {
  return (
    <BlocksProviderContext.Provider value={theme}>
      <div className={classnames(theme.vars, styles.themeProvider)}>{children}</div>
    </BlocksProviderContext.Provider>
  );
};
