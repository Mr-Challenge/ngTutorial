/*This module is used to create a http server which listens 
on a specified port and recieve the request and sends a response */
var  http  =  require('http');

var  server  =  http.createServer(function (req, res) {
    res.end('<h1>Welcome to Node.js - HTTP Server</h1>');
});

server.listen(3000, function () {
    console.log('Listening on port 3000 at localhost');
});