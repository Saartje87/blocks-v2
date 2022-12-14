import { DecoratorFn, Parameters } from '@storybook/react';
import spriteUrl from '../assets/icons.svg';
import { BlocksProvider } from '../src';
import { theme } from '../src/Themes/Momotaro';

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
  <BlocksProvider theme={theme} spriteUrl={spriteUrl}>
    <Story {...context} />
  </BlocksProvider>
);

export const decorators = [withProviders];
