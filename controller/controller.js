const Router = require('koa-router');
const pathList = require('../config/router.js')
const router = new Router();
const print = require('../lib/printmsg.js')

function add_rule(reg,method, rule) {
	switch(method.toLowerCase()){
		case 'get' : router.get(reg, rule);
		case 'post' : router.post(reg, rule);
		default : router.get(reg, rule);
	}
}

function add_rules() {
    let method,url,arg,rule,type;
    // 添加规则
    for (let reg in pathList) {
		arg = pathList[reg].split(':');
		url = arg[0];
		method = arg.length > 1 ? arg[1] : '';
		rule = require(url);
		type = typeof rule;
		if(type == 'function'){
			print.info('成功拉取中间件 : ' + url);
		}else if(type){
			print.warn('中间件应为 async 函数 : ' + url);
		}else{
			print.error('拉取中间件失败 : ' + url);
		}
		add_rule(reg, method, rule);
    }
}

module.exports = function () {
    add_rules();
    return router.routes();
};

