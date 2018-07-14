const path = require('path');
const rootPath = path.resolve(__dirname, '../')

module.exports = (storybookBaseConfig, configType, defaultConfig) => {

  defaultConfig.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  })

  defaultConfig.resolve.alias['@'] = rootPath
  return defaultConfig
}
