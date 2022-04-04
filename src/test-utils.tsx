import { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { BlocksThemeProvider } from './BlocksThemeProvider/BlocksThemeProvider';
import { theme } from './test-theme.css';

const AllTheProviders: FC = ({ children }) => {
  return <BlocksThemeProvider theme={theme}>{children}</BlocksThemeProvider>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
