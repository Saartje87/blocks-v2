import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';
import { useTheme } from '../ThemeProvider/useTheme';
import { getRootElement } from '../utils/rootElement';

export interface PortalProps {
  children: ReactNode;
  container?: HTMLElement;
}

export const Portal: FC<PortalProps> = ({ children, container }) => {
  const theme = useTheme();

  return createPortal(
    <ThemeProvider theme={theme}>{children}</ThemeProvider>,
    container || getRootElement(),
  );
};
