"use strict";
module.exports = async (ctx,next) => {
	console.log('page : ' + Date.now());
  ctx.body = 'Hello World!';
}



