const path = require('path');

const rootPath = path.resolve(__dirname, '../../');
const buildDir = path.resolve(rootPath, './build');
const staticDir = path.resolve(buildDir, 'static');
const srcDir = path.resolve(rootPath, 'src');
const publicDir = path.resolve(rootPath, 'public');
const localConfigEntryPoint = path.resolve(publicDir, 'config.local.js');
const publicPath = '/';
const appEntryPoint = path.resolve(srcDir, 'index.tsx');

module.exports = {
  rootPath,
  buildDir,
  staticDir,
  srcDir,
  appEntryPoint,
  publicPath,
  publicDir,
  localConfigEntryPoint,
};
