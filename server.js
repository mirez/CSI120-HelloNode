// pulls in expressjs module
var express = require('express'),
    app = express();

// Handle Get Request
app.get('/', function(req, res){
	// get stuff from request
	// req
	
	// DO STUFF

	// return stuff to client
    res.send('Hello World');
});

app.get('/stuff.json', function(req, res){
    res.json({"what" : "Hello World!" });
});

// app.post('/', function(req, res){
//     res.send('Hello World');
// });

app.listen(3000);
console.log("listening at port 3000");

// to run:
// node server.js