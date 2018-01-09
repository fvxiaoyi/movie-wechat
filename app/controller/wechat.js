'use strict';

const Controller = require('egg').Controller


class WechatController extends Controller {
  async connect() {}

  async receiveMsg() {
		let param = this.ctx.request.body.xml
		if(param.MsgType === 'text') {
			this.ctx.body = await this.ctx.service.movieService.searchByName(param)
		}
  }

  async getMovie(ctx, next) {
    let _id = ctx.params.id
    let find = await this.ctx.service.movieService.get(_id)
    if(find) {
      await this.ctx.render('detail', {
        data : find
      })
    } else {
      
    }
    
  }

}
module.exports = WechatController