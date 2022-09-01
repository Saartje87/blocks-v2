import { DecoratorFn, Parameters } from '@storybook/react';
import { BlocksProvider } from '../src';
// import { theme } from '../src/Themes/Blockle';
import { momotaroTheme } from '../src/Themes/Momotaro';

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const withProviders: DecoratorFn = (Story, context) => (
  <BlocksProvider theme={momotaroTheme}>
    <Story {...context} />
  </BlocksProvider>
);

export const decorators = [withProviders];
