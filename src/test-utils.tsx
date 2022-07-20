import { render, RenderOptions } from '@testing-library/react';
import { FC, ReactElement } from 'react';
import { BlocksProvider } from './components/BlocksProvider/BlocksProvider';
import { theme } from './Themes/Blockle';

const AllTheProviders: FC = ({ children }) => {
  return <BlocksProvider theme={theme}>{children}</BlocksProvider>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
