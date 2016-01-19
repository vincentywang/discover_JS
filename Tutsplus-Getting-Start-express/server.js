var express = require('express'),
	bodyParser = require('body-parser'),
 	app = express();

 // GET 		-Read
 // POST 		-Create
 // PUT 		-Update
 // DELETE	-Delete

 app.use(bodyParser.urlencoded());

 app.enable('case sensitive routing');
 app.enable('strict routing');
 app.enable('view cache');
 app.enable('view engine', 'jade');
 app.disable('x-power-by'); 
 
var names = [];

app.all('/', function (req, res, next) {
	console.log('from ALL');
	next();
});

app.get('/', function (req, res, next){
	console.log(names);
	next();
}, function (req, res) {
	res.render('index.jade', {
		names : names
	})
});

app.post('/', function (req, res) {
	names.push(req.body.name);
	res.redirect('/');
});

app.listen(3000);
