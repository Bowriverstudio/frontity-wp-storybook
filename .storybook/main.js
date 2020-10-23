const path = require("path");

module.exports = {
  stories: [
    "../frontity/packages/mars-theme/src/**/*.stor@(y|ies).@(js|jsx|ts|tsx|mdx)",
    "../stories/**/*.stor@(y|ies).@(js|jsx|ts|tsx|mdx)",
    "../documentation/**/*.stor@(y|ies).@(js|jsx|ts|tsx|mdx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-actions",
    "storybook-formik/register"
    // "@whitespace/storybook-addon-html/register",
  ],
  webpackFinal: config => {
    //https://duncanleung.com/emotion-css-prop-jsx-pragma-storybook/
    config.module.rules[0].use[0].options.presets = [
      require.resolve("@babel/preset-react"),
      require.resolve("@babel/preset-env"),
      require.resolve("@emotion/babel-preset-css-prop")
    ];

    config.resolve.alias["@testingUtils"] = path.resolve(
      __dirname,
      "../frontity/testingUtils"
    );

    //   // Load images.
    //   {
    // 	  test: /\.(gif|jpe?g|png)$/,
    // 		  loader: 'url-loader?limit=25000',
    // 			  query: {
    // 		  limit: 10000,
    // 			  name: 'static/media/images/[name].[hash:8].[ext]'
    // 	  }
    //   },

    // Frontity components are not compiled, so we have to make sure we compile them ourselves:
    const tsRule = config.module.rules.find(rule => /ts/.test(rule.test));
    tsRule.exclude = /node_modules\/(?!(@frontity\/components|@frontity\/error|@frontity\/connect\/|@frontity\/hooks)\/).*/;
    return config;
  }
};
