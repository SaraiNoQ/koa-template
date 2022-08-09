// middleware demo
const validateDemo = async(ctx, next) => {
	const data = ctx.request.body;
	console.log('receive frontend data:', data);
	
	return next();
};

module.exports = {
	validateDemo
};