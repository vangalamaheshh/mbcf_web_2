// grab the packages we need
var express = require('express');
var app = express();
var path = require('path');
var port = 8000;

app.use(express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/app'));
//app.use('/bower_components',  express.static(__dirname + '/bower_components'));
//app.use('/app', express.static(__dirname + '/app'));

// routes will go here
app.get('/', function(request, response){
    response.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/', function(request, response) {
    console.log("Req:" + request);
    response.send();
});

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);
