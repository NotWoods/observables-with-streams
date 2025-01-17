/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = function(config) {
  const configuration = {
    basePath: ".",
    frameworks: ["mocha", "chai", "karma-typescript"],
    preprocessors: {
      "**/*.ts": "karma-typescript"
    },
    files: [
      {
        pattern: "tests/**/*.ts",
        type: "module"
      },
      {
        pattern: "src/**/*.ts",
        included: false
      }
    ],
    reporters: ["progress"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    // logLevel: config.LOG_DEBUG,
    autoWatch: true,
    singleRun: true,
    concurrency: Infinity,
    browsers: ["ChromeCanaryHeadless"],
    karmaTypescriptConfig: {
      coverageOptions: {
        exclude: /.*/
      },
      bundlerOptions: {
        entrypoints: /\/?tests\//
      },
      tsconfig: "./tsconfig.test.json",
    }
  };

  config.set(configuration);
};
