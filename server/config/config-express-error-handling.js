module.exports = function(app) {


	app.use(function(req, res, next) {
		var err = new Error('Not Found');
		err.status = 404;
		next(err);
	});


	if (app.get('env') === 'development') {
		app.use(function(err, req, res, next) {
			res.status(err.status || 500);
			res.json({
				success: false,
				errorCode: err.status,
				errorMessage: err.message,
				total: 0,
				result: {
					err: err
				}
			});
		});
	}


	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.json({
			success: false,
			errorCode: err.status,
			errorMessage: err.message,
			total: 0,
			result: null
		});
	});

};

