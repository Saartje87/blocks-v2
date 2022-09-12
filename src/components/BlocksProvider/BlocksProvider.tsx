import { FC, ReactNode, useMemo } from 'react';
import { classnames } from '../../utils/classnames';
import * as styles from './BlocksProvider.css';
import { BlocksProviderContext, BlocksProviderContextValue } from './BlocksProviderContext';

export type BlocksProviderProps = {
  children: ReactNode;
} & BlocksProviderContextValue;

export const BlocksProvider: FC<BlocksProviderProps> = ({
  children,
  theme,
  spriteUrl,
  linkComponent,
}) => {
  const value = useMemo(
    (): BlocksProviderContextValue => ({ theme, spriteUrl, linkComponent }),
    [theme, spriteUrl, linkComponent],
  );

  return (
    <BlocksProviderContext.Provider value={value}>
      <div className={classnames(theme.vars, styles.themeProvider)}>{children}</div>
    </BlocksProviderContext.Provider>
  );
};
