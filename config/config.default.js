'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1514432432943_5786';

  // add your config here
  config.middleware = ['xmlBodyParser'];

  config.xmlBodyParser = {
    xmlOptions: {
      explicitArray: false
    }
  }

  config.bodyParser = {
    enable: false
  }

  config.security = {
    csrf: {
      enable: false
    }
  }

  config.view = {
    mapping: {
      '.html': 'ejs'
    }
  }

  return config;
};