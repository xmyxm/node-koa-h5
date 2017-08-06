"use strict";
const fetch = require('node-fetch');

module.exports = async (ctx,next) => {
	console.log('page : ' + Date.now());
   await fetch('https://github.com/')
	.then(res => res.text())
	.then(body =>{ctx.body = body;});
}



