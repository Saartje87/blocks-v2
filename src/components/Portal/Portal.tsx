import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { getRootElement } from '../../utils/rootElement';
import { BlocksProvider } from '../BlocksProvider/BlocksProvider';
import { useBlocksContext } from '../BlocksProvider/useBlocksContext';

export interface PortalProps {
  children: ReactNode;
  container?: HTMLElement;
}

export const Portal: FC<PortalProps> = ({ children, container }) => {
  const context = useBlocksContext();

  return createPortal(
    <BlocksProvider {...context}>{children}</BlocksProvider>,
    container || getRootElement(),
  );
};
