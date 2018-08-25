const path = require('path');
const rootPath = path.resolve(__dirname, '../')

module.exports = (storybookBaseConfig, configType, defaultConfig) => {

  defaultConfig.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  })

  const defaultAlias = defaultConfig.resolve.alias
  const addAlias = {
    '@' : path.join(__dirname, rootPath),
    '@organisms' : path.join(__dirname, 'components/organisms'),
    '@atoms' : path.join(__dirname, 'components/atoms')
  }
  defaultConfig.resolve.alias = Object.assign(defaultAlias, addAlias)
  return defaultConfig
}
