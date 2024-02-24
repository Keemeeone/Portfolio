// config-overrides.js

const path = require('path');

module.exports = function override(config) {
  // 추가적인 webpack 설정을 여기에 추가합니다.
  config.resolve.fallback = {
    "path": require.resolve("path-browserify"),
    "os": require.resolve("os-browserify/browser"),
    "crypto": require.resolve("crypto-browserify")
  };

  return config;
}
