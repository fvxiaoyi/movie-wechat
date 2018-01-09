# movie

wechat api

## 快速入门

<!-- 在此次添加使用文档 -->

如需进一步了解，参见 [egg 文档][egg]。

### 本地开发

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### 部署

```bash
$ npm start
$ npm stop
```

### 单元测试

- [egg-bin] 内置了 [mocha], [thunk-mocha], [power-assert], [istanbul] 等框架，让你可以专注于写单元测试，无需理会配套工具。
- 断言库非常推荐使用 [power-assert]。
- 具体参见 [egg 文档 - 单元测试](https://eggjs.org/zh-cn/core/unittest)。

### 内置指令

- 使用 `npm run lint` 来做代码风格检查。
- 使用 `npm test` 来执行单元测试。
- 使用 `npm run autod` 来自动检测依赖更新，详细参见 [autod](https://www.npmjs.com/package/autod) 。


[egg]: https://eggjs.org

movie 								
mongoose-plugin (eggjs) x
movie-wechat (eggjs)   microservices whit movie-manager use Seneca.js
movie-manager (eggjs)  x
movie-manager-console  (vue)  x

feature
1.movie-manager-console
2.mongoose-plugin
3.movie-manager
4.movie-manager-console with movie-manager api
5.movie-wechat microservices whit movie-manager use Seneca.js
6.think oauth2 project in java