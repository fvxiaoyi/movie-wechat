'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
  	await this.ctx.render('index', {})
  }

  async index2() {
    this.ctx.body = this.ctx.request.body
  }
  
}

module.exports = HomeController;
