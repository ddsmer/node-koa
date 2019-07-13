const path = require('path')
const fs = require('fs')
const Koa = require('koa')
const app = new Koa();
const route = require('koa-route')
const serve = require('koa-static')

const static = serve(path.resolve(__dirname, 'src'))

const main = (ctx) => {
  console.log(ctx.request.path)
  ctx.response.type = 'html'
  ctx.response.body = fs.createReadStream('./index.html') 
}

const about = ctx => {
  ctx.response.type = 'html'
  ctx.response.body = '<a href="./">to Index</a>'
}

app.use(static)
app.use(route.get('/', main))
app.use(route.get('/about', about))

app.listen(3000)


