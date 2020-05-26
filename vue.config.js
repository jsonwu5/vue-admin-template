const path = require('path');
const webpack = require('webpack');

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

const config = require(resolve('src/tools/config.js'));
const isTest = process.env.IS_TEST;

module.exports = {
  lintOnSave: process.env.NODE_ENV === 'development',
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true, // less 配置
      },
    },
  },
  chainWebpack: (config) => {
    config.plugins.delete('prefetch');
    config.resolve.alias
      .set('@images', resolve('src/assets/images'))
      .set('@components', resolve('src/components'))
      .set('@http', resolve('src/http'))
      .set('@router', resolve('src/router'))
      .set('@store', resolve('src/store'))
      .set('@styles', resolve('src/styles'))
      .set('@tools', resolve('src/tools'))
      .set('@views', resolve('src/views'));
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        isDev: JSON.stringify(process.env.NODE_ENV === 'development'),
      }),
    ],
  },
  devServer: {
    port: '8889',
    proxy: config.DEV_URL,
    disableHostCheck: process.env.NODE_ENV === 'development',
  },
};
