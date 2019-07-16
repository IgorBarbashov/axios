var express = require('express');
var app = express();

let j = 0;

app.get('/', (req, res) => {
	j += 1;
	setTimeout(() => {
		res.header('Access-Control-Allow-Origin', req.headers.origin);
		res.send(`${j} - Hello World!`);
	}, 500);
});

app.listen(5000, function() {
	console.log('Example app listening on port 5000!');
});
