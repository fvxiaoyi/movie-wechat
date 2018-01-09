const Service = require('egg').Service;

class MovieService extends Service {

  async searchByName(param) {
	let obj = {
		ToUserName : param.FromUserName,
		FromUserName : param.ToUserName,
		CreateTime : Date.now()
	}, content
	if(param.MsgType === 'text' && (content = param.Content)) {
		let condition = eval(`/${content}/`)
		let result = await this.ctx.model.Movie.find({
			'$or' : [{'name' : condition }, {'transName' : condition }]
		})
		.populate('types', 'name')
		.limit(8)
  		.sort({ year: -1 })
  		.select({ 
  				_id : 1,
  				name : 1,
  				transName : 1,
  				country : 1,
  				year : 1,
  				types : 1,
  				imdbScore : 1,
  				doubanScore : 1,
  				profile : 1,
  				displayImg : 1
  			}).exec()
		if(result.length > 0) {
			obj.MsgType = 'news'
			obj.ArticleCount = result.length
			obj.Articles = {}
			obj.Articles.item = []
			for(let r of result) {
				let item = {},
				  baseUrl = this.config.baseUrl
				let displayImg = r.displayImg.length > 0 ? `${baseUrl}/store/gain/${r.displayImg[0]}` : `${baseUrl}/public/noimg.jpg`
				item.Title = r.name[0]
				item.Description = r.profile ? r.profile.substring(0, 60) + '... [点击查看下载地址]' : ''
				item.PicUrl = displayImg
				item.Url = `${baseUrl}/movie/get/${r._id}`
				obj.Articles.item.push(item)
			}
		} else {
			obj.MsgType = 'text'
			obj.Content = `搜索不到【${content}】`
		}
	}
	return obj
  }

  async get(_id) {
	let find = await this.ctx.model.Movie.findOne({ _id }).populate('types', 'name')
	.select({ 
	  fileIndex : 0,
	  __v : 0,
	  createTime : 0,
	  modifyTime : 0
	}).exec()
	if(find) {
		let imgUrl,
		  baseUrl = this.config.baseUrl
		if(find.displayImg) {
		  if(find.displayImg.length === 0) {
			imgUrl = `${baseUrl}/public/noimg.jpg`
		  } else {
			imgUrl = `${baseUrl}/store/gain/${find.displayImg[0]}`
		  }
		}
		let data = find.toObject()
		data.imgUrl = imgUrl
		return data
	} else {
		return null
	}
	
  }

}

module.exports = MovieService
