module.exports = {
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)(\\?(inline|raw))?$':
      'jest-transform-stub',
    // '.+\\.svg?.+$': 'jest-transform-stub',
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },
  moduleFileExtensions: ['js', 'vue', 'json'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
    // '.+\\.svg?.+$': 'jest-transform-stub',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)(\\?(inline|raw))?$':
      'jest-transform-stub',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue',
  ],
  testEnvironment: 'jsdom',
}
