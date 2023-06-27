/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],
  coverageProvider: "v8",

  moduleDirectories: [
    "node_modules"
  ],

  transform: {},
  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node"
  ],
};
