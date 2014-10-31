var MAX_TIMEOUT = 1000;
var STOCK_COUNT = 10;
var MAX_STOCK_VALUE = 100;


var express = require('express');
var app = express();

app.get('/', function(req, res){
  // res.send('hello world');
	var timeOut = Math.floor((Math.random() * MAX_TIMEOUT) + 1);
	var stockIndex = Math.floor((Math.random() * STOCK_COUNT) + 1);
	var stockValue = ((Math.random() * MAX_STOCK_VALUE) + 1).toFixed(2);
	setTimeout(function() {
		res.send("Timeout: " + timeOut +
								" | stockIndex: " + stockIndex +
								" | stockValue: " + stockValue);
	}, timeOut);
});

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000);




// var http = require("http");
// http.createServer(function(request, response) {
// 	var timeOut = Math.floor((Math.random() * MAX_TIMEOUT) + 1);
// 	var stockIndex = Math.floor((Math.random() * STOCK_COUNT) + 1);
// 	var stockValue = ((Math.random() * MAX_STOCK_VALUE) + 1).toFixed(2);
// 	setTimeout(function() {
// 		response.writeHead(200, { "Content-Type": "text/plain" });
// 		response.end("Timeout: " + timeOut +
// 								 " | stockIndex: " + stockIndex +
// 								 " | stockValue: " + stockValue);
// 	}, timeOut);
// }).listen(8000);
