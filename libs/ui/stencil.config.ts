import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'nxlp',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      dir: '../../dist/libs/ui/dist',
    },
    {
      type: 'docs-readme',
    },
  ],
  plugins: [sass(), postcss()],
  globalStyle: 'src/css/core.scss',
};
