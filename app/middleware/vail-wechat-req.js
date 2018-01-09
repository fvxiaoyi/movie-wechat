'use strict';

module.exports = async (ctx, next) => {
    let {signature, echostr, timestamp, nonce} = ctx.query
    let success = ctx.service.wechatService.valiReq(signature, timestamp, nonce)
    if(success) {
        if(echostr) {
            ctx.body = echostr
        }
        await next()
    } else {
        return
    }
}