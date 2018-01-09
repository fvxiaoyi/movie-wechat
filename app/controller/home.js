'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
  	this.ctx.redirect('/public/noimg.jpg')
  }

  async index2() {
    this.ctx.body = this.ctx.request.body
  }
  
}

module.exports = HomeController;
