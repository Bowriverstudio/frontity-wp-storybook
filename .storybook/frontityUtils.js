/**
 * External dependencies
 */
const merge = require("lodash.merge");

/**
 * React / Frontity dependencies
 */
import React from "react";
import { Provider, createStore } from "@frontity/connect";

/**
 * Internal dependencies
 */
import settings from "./sample-data/frontity.settings";

export function withFrontityStore(
  stateOverrides = {},
  defaultOverrides = {},
  extra = {}
) {
  // Deep merge instead of using pread operator (...) - as {state.theme} was getting overwritten.
  // https://lodash.com/docs#merge
  // https://www.javascripttutorial.net/object/javascript-merge-objects/#:~:text=JavaScript%20Merge%20Objects,-Summary%3A%20in%20this&text=To%20merge%20objects%20into%20a,assign()%20method
  let state = {
    ...settings,
    ...{
      router: {
        link: "/"
      }
    }
  };
  merge(state, stateOverrides);

  // Default actions taken from node_modules/@frontity/router/__tests__/index.test.ts
  const defaultActions = {
    router: {
      /*eslint no-unused-vars: ["error", { "args": "none" }]*/
      set: state => (link, options) => {
        console.log("Link Clicked");
      }
    },
    theme: {
      toggleMobileMenu: () => {
        console.log("toggleMobileMenu Action");
      }
    },
    ...defaultOverrides
  };

  // We need to expose a store in order for frontity components to work:
  // Mock store technique taken from frontity test suite: https://github.com/frontity/frontity/blob/83c5eadb4dffc6275fe4d93b8d379c21449a2727/packages/connect/src/__tests__/connect.tests.jsx#L11
  const store = createStore({
    state: state,
    actions: defaultActions,
    ...extra
  });

  console.log("HELPER store", store);
  //   console.log("HELPER extra", extra);
  //   console.log("HELPER state", state);
  //   console.log("HELPER stateOverrides", stateOverrides);

  return function(renderedComponent) {
    return <Provider value={store}>{renderedComponent}</Provider>;
  };
}
