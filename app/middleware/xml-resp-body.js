'use strict';

const xml2js = require('xml2js'),
  assert = require('assert')

module.exports = async (ctx, next) => {
  await next()
  let resp = ctx.body
  assert((resp && !(resp instanceof Array) && resp instanceof Object) === true, '返回结果不是一个对象')
  const builder = new xml2js.Builder({
    rootName  : 'xml'
  })
  ctx.body = builder.buildObject(resp)
}