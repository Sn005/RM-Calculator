const path = require('path')

module.exports = {
  globals: {
    __TRANSFORM_HTML__: true
  },
  rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: [
    'js',
    'json',
    'vue'
  ],
  moduleNameMapper: {
    "^vue$": "vue/dist/vue.common.js",
    "^@/(.*)$": "<rootDir>/$1"
  },
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    ".*\\.(vue)$": "<rootDir>/node_modules/jest-vue-preprocessor"
    // '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(@storybook/.*\\.vue$))'
  ],
  testPathIgnorePatterns: [
    '/node_modules/(?!(@storybook/.*\\.vue$))',
    '<rootDir>/test/e2e',
    '<rootDir>/test/unit'
  ],
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupFiles: ['<rootDir>/test/unit/setup'],
  coverageDirectory: '<rootDir>/test/unit/coverage',
  collectCoverageFrom: [
    'components/**/*.{js,vue}',
    'pages/**/*.{js,vue}',
    'layouts/**/*.{js,vue}',
    '!/.storybook',
    '!/.nuxt',
    '!**/node_modules/**'
  ]
}
