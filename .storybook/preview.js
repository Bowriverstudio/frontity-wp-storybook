import React from "react";
import { withFrontityStore } from "@testingUtils/frontityUtils";
import { addDecorator } from "@storybook/react";
import { withConsole } from "@storybook/addon-console";
// import { withHTML } from "@whitespace/storybook-addon-html/react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  a11y: {
    element: "#root",
    config: {},
    options: {},
    manual: true
  }
};

// https://github.com/storybookjs/storybook-addon-console
addDecorator((storyFn, context) => withConsole()(storyFn)(context));

// We need to expose a store in order for frontity components to work:
// Storybook 6, is not adding this as expected.  Likely a syntax error on my part.
export const decorators = [Story => withFrontityStore()(<Story />)];

// This worked in Storybook 5.
// addDecorator(storyFn => withFrontityStore()(storyFn()));

// storybook-addon-html conflicts with storyshots (known issue: https://github.com/whitespace-se/storybook-addon-html/issues/5)
// so we only enable it if we're not testing:
// if (process.env.NODE_ENV !== "test") {
//   addDecorator(withHTML);
// }
// addDecorator(withHTML);
