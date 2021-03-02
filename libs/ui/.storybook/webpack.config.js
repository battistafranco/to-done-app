const fs = require('fs');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

const rootWebpackConfig = require('../../../.storybook/webpack.config');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  config = await rootWebpackConfig({ config, mode });

  const distBasePath = '../../../dist/libs/ui/dist';
  const distComponentPath = distBasePath + '/collection/components';

  // config.entry.push(path.join(__dirname, '../dist/pure-web-components.js'));
  fs.readdirSync(path.join(__dirname, distComponentPath)).map(function (file) {
    jsFilePath = path.join(
      __dirname,
      `${distComponentPath}/${file}/${file}.js`
    );
    try {
      if (fs.existsSync(jsFilePath)) {
        config.entry.push(jsFilePath);
      }
    } catch (err) {
      console.error(err);
    }
    cssFilePath = path.join(
      __dirname,
      `${distComponentPath}/${file}/${file}.css`
    );
    try {
      if (fs.existsSync(cssFilePath)) {
        config.entry.push(cssFilePath);
      }
    } catch (err) {
      console.error(err);
    }
  });

  const cssGlobalFilePath = path.join(
    __dirname,
    `../${distBasePath}/nxlp/nxlp.css`
  );
  try {
    if (fs.existsSync(cssGlobalFilePath)) {
      config.entry.push(cssGlobalFilePath);
    }
  } catch (err) {
    console.error(err);
  }

  config.plugins.push(
    new CopyPlugin({
      patterns: [
        {
          from: 'nxlp.css',
          to: './',
          context: 'dist/libs/ui/dist/nxlp',
        },
        {
          from: '**/*',
          to: './fonts',
          context: 'libs/ui/fonts',
        },
        {
          from: '**/*',
          to: './icons',
          context: `dist/libs/ui/dist/nxlp/icons`,
        },
        {
          from: '**/*',
          to: './',
          context: 'dist/libs/ui/dist',
        },
      ],
    })
  );
  config.plugins.push(new WriteFilePlugin());

  return config;
};
