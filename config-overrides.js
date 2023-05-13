const webconfig = require("./config/webpack.config");

/* config-overrides.js */
module.exports = function override(config, env) {
  //do stuff with the webpack config...
  return Object.assign(config, webconfig);
};
