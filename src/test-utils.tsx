import { render, RenderOptions } from '@testing-library/react';
import { FC, ReactElement } from 'react';
import { theme } from './test-theme.css';
import { BlocksThemeProvider } from './ThemeProvider/ThemeProvider';

const AllTheProviders: FC = ({ children }) => {
  return <BlocksThemeProvider theme={theme}>{children}</BlocksThemeProvider>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
