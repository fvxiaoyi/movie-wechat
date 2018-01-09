'use strict';

const path = require('path')

// had enabled by egg
// exports.static = true;
exports.mongoose = {
  enable: true,
  // package: 'egg-mongoose'
  path: path.join(__dirname, '../lib/plugin/egg-mongoose')
}

exports.security = {
  csrf: {
    ignoreJSON: true
  }
}

exports.ejs = {
  enable: true,
  package: 'egg-view-ejs'
}