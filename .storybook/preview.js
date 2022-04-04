const { AllProviders } = require('../src/all-providers');

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <AllProviders>
      <Story />
    </AllProviders>
  ),
];
