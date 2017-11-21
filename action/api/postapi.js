"use strict";

module.exports = async (ctx, next) => {
	//console.log('page : ' + Date.now());
	console.log('取ctx主体： ' + JSON.stringify(ctx.request.body));
	ctx.body = { text: ctx.request.body.text, content: ctx.request.body.content };
}









