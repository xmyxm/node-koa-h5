const Koa = require('koa');
var cors = require('koa2-cors');
const app = new Koa();
const controller = require('./controller/controller.js');
//Node.js 内核性能监控分析工具  启动后访问 http://127.0.0.1:12333 即进入 Easy-Monitor 的首页
// const easyMonitor = require('easy-monitor');
// easyMonitor('node-koa-h5');

//post跨域配置
app.use(cors({
  origin: function(ctx) {
    if (ctx.url === '/test') {//设置 test 请求不允许跨域
      return false;
    }
    return '*';//设置允许所有域名跨域
    //return 'www.baidu.com';//设置只允许百度页面的请求跨域
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));
app.use(controller());
app.listen(3000);







// 也就是cors具体实现过程
// 我們可以用下面的中間件理解app.use(cors({}))
// app.use(async (ctx, next) => {
//     // 允许來自所有域名的请求
//     ctx.set("Access-Control-Allow-Origin", "*");
//     // 只允许 http://localhost:8080 这个域名的请求了
//     // ctx.set("Access-Control-Allow-Origin", "http://localhost:8080"); 

//     // 设置所允许的http请求方法
//     ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");

//     // 首部字段用于预检请求的响应。其指明了实际请求中允许携带的首部字段
//     ctx.set("Access-Control-Allow-Headers", "x-requested-with, accept, origin, content-type");

//     // 浏览器收到预检请求的响应后，检查了Origin、Access-Control-Request-Method和Access-Control-Request-Headers响应头以后，确认允许跨域请求，就可以做出回应。

//     // Content-Type表示具体请求中媒体类型
//     ctx.set("Content-Type", "application/json;charset=utf-8");

//     // 该响应头可选。它的值是一个布尔值，表示是否允许发送Cookie。不设置情況下，Cookie不包括在CORS请求之中。
//     // 当设置为允许携带cookie时，需要保证"Access-Control-Allow-Origin"指定的域名不能是"*"，且必须明确域名;
//     ctx.set("Access-Control-Allow-Credentials", true);

//     // 该请求头可选，用來指定本次预检请求的有效期，单位为秒。
//     // 当请求方法是PUT或DELETE等特殊方法或者Content-Type的类型是application/json时，浏览器会发送一次预检请求验证
//     // 下面的的设置只是本次验证的有效时间，即在该时间段内不用再次验证
//     ctx.set("Access-Control-Max-Age", 300);

//     /*
//     CORS请求时，XMLHttpRequest对象的getResponseHeader()方法只能拿到6个基本头信息：
//         Cache-Control、
//         Content-Language、
//         Content-Type、
//         Expires、
//         Last-Modified、
//         Pragma。
//     */
//     // 需要获取其它头信息时，使用Access-Control-Expose-Headers，
//     // getResponseHeader('myData')可以返回我们所需要的值
//     ctx.set("Access-Control-Expose-Headers", "myData");

//     await next();
// }

















