"use strict";
// module.exports = function * () {
// 	return yield 'api : ' + Date.now()
// }

module.exports = async (ctx, next) => {
	//console.log('page : ' + Date.now());
	console.log(ctx);
	ctx.body = JSON.stringify({ text: 'hello' });
}



