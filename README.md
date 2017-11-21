# node-koa-h5
node服务脚手架

使用步骤：
1. git clone https://github.com/xmyxm/node-koa-h5.git 先克隆项目到本地
2. npm i 安装项目依赖
3. node app.js 运行项目启动文件
4. 在浏览器打开test目录下的page.html文件 即可提交post 或 get 请求测试。

说明：
项目一共分3个文件：controller ，action ， config 。
添加新的服务或者页面直接 在 config 的 router 文件中添加 请求路由和负责处理响应当前路由的代码的文件路径
action 中为处理响应的代码文件

特别说明：如果想一边修改代码一边重启node项目请 
安装 nodemon
1. npm install -g nodemon 安装nodemon
2. nodemon app.js 运行app.js并监控
nodemon 的相关配置已添加到项目中，可直接使用，配置文件：nodemon.json