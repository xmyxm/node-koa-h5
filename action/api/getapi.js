"use strict";

module.exports = async (ctx, next) => {
	//console.log('page : ' + Date.now());
	console.log('取ctx主体： ' + JSON.stringify(ctx.request.query));
	ctx.body = JSON.stringify({ text: ctx.request.query.text, content: ctx.request.query.content });
}









