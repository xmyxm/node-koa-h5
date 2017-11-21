"use strict";
const fetch = require('node-fetch');

module.exports = async (ctx,next) => {
	const start =  Date.now();
	await fetch('https://github.com/')
	.then(res => res.text())
	.then(body =>{ctx.body = body;console.log('页面响应时间: ' + (Date.now() - start));});
}



