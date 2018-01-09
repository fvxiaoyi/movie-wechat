'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const vailWechatReq = app.middlewares.vailWechatReq,
    xmlRespBody = app.middlewares.xmlRespBody
  const { router, controller } = app
  router.get('/', controller.home.index)
  router.post('/', controller.home.index2)
  router.get('/connect', vailWechatReq, controller.wechat.connect)
  router.post('/connect', vailWechatReq, xmlRespBody, controller.wechat.receiveMsg)
  router.get('/store/gain/:id', controller.store.gain)
  router.get('/movie/get/:id', controller.wechat.getMovie)
}
