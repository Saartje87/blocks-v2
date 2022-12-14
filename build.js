const { build } = require('esbuild');
const { dependencies, devDependencies } = require('./package.json');
const { vanillaExtractPlugin } = require('@vanilla-extract/esbuild-plugin');

const entryFile = 'src/index.ts';
const shared = {
  bundle: true,
  entryPoints: [entryFile],
  // Treat all dependencies in package.json as externals to keep bundle size to a minimum
  external: Object.keys({ ...dependencies, ...devDependencies }),
  logLevel: 'info',
  // minify: true,
  sourcemap: true,
  plugins: [vanillaExtractPlugin()],
};

build({
  ...shared,
  format: 'esm',
  outfile: './dist/index.esm.js',
  target: ['esnext'],
});

build({
  ...shared,
  format: 'cjs',
  outfile: './dist/index.cjs.js',
  target: ['esnext'],
});
