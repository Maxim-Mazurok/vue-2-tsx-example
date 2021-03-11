import { Config } from "@jest/types";

const config: Config.InitialOptions = {
  moduleFileExtensions: ["js", "ts", "tsx", "json"],
  moduleNameMapper: {
    "^vue$": "<rootDir>/node_modules/vue/dist/vue.js"
  },
  testRegex: "(.*)\\.spec\\.tsx?$",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest"
  },
  transformIgnorePatterns: ["node_modules/(?!vue-tsx-support)"],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
      babelConfig: "babel.config.js"
    }
  }
};
export default config;
