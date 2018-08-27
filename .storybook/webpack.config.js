const path = require('path');
const rootPath = path.resolve(__dirname, '../')

module.exports = (storybookBaseConfig, configType, defaultConfig) => {

  defaultConfig.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  })
  defaultConfig.resolve.alias['@'] = rootPath
  defaultConfig.resolve.alias['@organisms'] =  path.join(__dirname, 'components/organisms')
  defaultConfig.resolve.alias['@atoms'] = path.join(__dirname, 'components/atoms')
  return defaultConfig
}
