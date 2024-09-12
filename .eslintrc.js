const { init } = require('@fullstacksjs/eslint-config/init');

module.exports = init({
  root: true,
  modules: {
    auto: true,
    esm: true,
    next: true,
    storybook: true,
    typescript: {
      parserProject: ['./tsconfig.eslint.json'],
      resolverProject: ['./tsconfig.json'],
    },
  },
});
