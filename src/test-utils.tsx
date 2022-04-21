import { render, RenderOptions } from '@testing-library/react';
import { FC, ReactElement } from 'react';
import { ThemeProvider } from './ThemeProvider/ThemeProvider';
import { theme } from './Themes/Blockle';

const AllTheProviders: FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
