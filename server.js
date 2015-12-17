var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongo = require('mongodb');
var mongoose = require('mongoose');

var people = require('./routes/people');

mongoose.connect('mongodb://localhost/mongoApiTest', function(err) {
	if (err) {
		console.log(err);
	} else {
		console.log('connected to mongoApiTest');
	}
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use('/people', people)


app.listen(3000, function() {
	console.log('listening')
})

module.exports = app;