# README

## Installation

### Vite

```ts
import { defineConfig } from 'vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vanillaExtractPlugin(), react()],
  optimizeDeps: {
    exclude: ['@blockle/blocks-v2'],
    include: [
      'react',
      'react-dom',
      'cssesc',
      'escape-string-regexp',
      'css-what',
      'chalk',
      'deepmerge',
    ],
  },
});
```

## CSS Reset

You are free to choose whatever reset template you like, we also provide one <>link<>

```ts
import '@blockle/blocks/reset.css';
```
