'use strict';

const Controller = require('egg').Controller,
  PassThrough = require('stream').PassThrough

class StoreController extends Controller {
  async gain() {
	let _id = this.ctx.params.id
	if(!_id) {
	  this.ctx.redirect('/public/noimg.jpg')
	  return
	}
	let file = await new Promise((resolve, reject) => {
	  this.app.gridfs.findOne({ _id }, function (err, file) {
		if(err) {
			reject(err)
		}
    	resolve(file)
      })
	})
	if(!file) {
	  this.ctx.redirect('/public/noimg.jpg')
	  return
	}
	this.ctx.set('Content-Type', 'image/jpeg;charset=UTF-8')
	this.ctx.set('Content-Disposition', `inline;filename=${file.filename}`)
	this.ctx.set('Content-Length', file.length)
	let readstream = this.app.gridfs.createReadStream({
	     _id
	})
	this.ctx.body = readstream.on('error', this.ctx.onerror).pipe(PassThrough())
  }
}

module.exports = StoreController;
