var connect = require('connect');
var serveStatic = require('serve-static');
var favicon = require('serve-favicon');

var app = connect();

app.use(serveStatic("./app"));
app.use(favicon('./favicon.ico'));

app.listen(3000,function(){
	console.log('Server Started : Listening on localhost at port:3000')
	console.log('URL : http://localhost:3000')
	console.log('Enter CTRL + c to stop the server');
});