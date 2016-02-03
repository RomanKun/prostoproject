app.route("/api")
.get(apiGet)
.post(apiPost)
.put(apiPut)
.delete(apiDelete);


function apiGet(req, res, next) {
	console.log("-- Call apiGet. ");
	console.dir(req.body);
	console.dir(req.params);
	res.json({
		message: "call apiGet"
	});
}

function apiPost(req, res, next) {
	console.log("-- Call apiPost. ");
	console.dir(req.body);
	console.dir(req.params);
	res.json({
		message: "call apiPost"
	});
}

function apiPut(req, res, next) {
	console.log("-- Call apiPut. ");
	console.dir(req.body);
	console.dir(req.params);
	res.json({
		message: "call apiPut"
	});
}

function apiDelete(req, res, next) {
	console.log("-- Call apiDelete. ");
	console.dir(req.body);
	console.dir(req.params);
	res.json({
		message: "call apiDelete"
	});
}
