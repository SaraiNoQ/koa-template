const { testBussinessError } = require('../constants/err.type');

class TestController {
	async responseDemo (ctx) {
		try {
			ctx.body = {
				status: {
					code: 200,
					message: 'success',
				}
			};
		} catch (error) {
			console.error(error);
			ctx.app.emit('error', testBussinessError, ctx);
		}
	}
}

module.exports = new TestController();