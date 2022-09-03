import { FC, ReactNode, useMemo } from 'react';
import { Theme } from '../../types/theme';
import { classnames } from '../../utils/classnames';
import * as styles from './BlocksProvider.css';
import { BlocksProviderContext } from './BlocksProviderContext';

export interface BlocksProviderProps {
  children: ReactNode;
  theme: Theme;
  spriteUrl: string;
}

export const BlocksProvider: FC<BlocksProviderProps> = ({ children, theme, spriteUrl }) => {
  const value = useMemo(() => ({ theme, spriteUrl }), [theme, spriteUrl]);

  return (
    <BlocksProviderContext.Provider value={value}>
      <div className={classnames(theme.vars, styles.themeProvider)}>{children}</div>
    </BlocksProviderContext.Provider>
  );
};
