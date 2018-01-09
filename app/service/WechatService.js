const Service = require('egg').Service,
  crypto = require('crypto')

class WechatService extends Service {

  valiReq(signature, timestamp, nonce) {
    let arr = [this.config.wechat.token, timestamp, nonce].sort(),
      str = '',
      md5sum = crypto.createHash('sha1')
    for(let s of arr) {
      str += s
    }
    md5sum.update(str)
    str = md5sum.digest('hex')
    return str == signature
  }

}

module.exports = WechatService
