const mobileRegular3G = require("lighthouse/lighthouse-core/config/constants.js")
  .throttling.mobileRegular3G;

const config = {
  extends: "lighthouse:default",
  settings: {
    throttling: mobileRegular3G,
  },
};

module.exports = config;
