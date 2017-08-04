const Koa = require('koa');
const app = new Koa();
//Node.js 内核性能监控分析工具  启动后访问 http://127.0.0.1:12333 即进入 Easy-Monitor 的首页
const easyMonitor = require('easy-monitor');
easyMonitor('node-koa-h5');
app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);





