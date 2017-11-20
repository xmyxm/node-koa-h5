const Koa = require('koa');
const app = new Koa();
const controller = require('./controller/controller.js');
//Node.js 内核性能监控分析工具  启动后访问 http://127.0.0.1:12333 即进入 Easy-Monitor 的首页
// const easyMonitor = require('easy-monitor');
// easyMonitor('node-koa-h5');


//console.log(typeof controller);
app.use(controller());
app.listen(3000);




























