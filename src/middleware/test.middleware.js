// middleware demo
const validateDemo = async(ctx, next) => {
	const data = ctx.request.body;
	if (!data) {
		ctx.body = {
			status: {
				code: 400,
				message: 'params error',
			}
		};
		return;
	}
	
	return next();
};

module.exports = {
	validateDemo
};