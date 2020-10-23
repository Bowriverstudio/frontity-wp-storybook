// Even though storybook doesn't require a babel config, Jest does.
// See https://jestjs.io/docs/en/tutorial-react
module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-typescript",
    "@babel/preset-react",
  ],
  plugins: ["macros"],
};
