import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { getRootElement } from '../../utils/rootElement';
import { BlocksProvider } from '../BlocksProvider/BlocksProvider';
import { useTheme } from '../BlocksProvider/useTheme';

export interface PortalProps {
  children: ReactNode;
  container?: HTMLElement;
}

export const Portal: FC<PortalProps> = ({ children, container }) => {
  const theme = useTheme();

  return createPortal(
    <BlocksProvider theme={theme}>{children}</BlocksProvider>,
    container || getRootElement(),
  );
};
