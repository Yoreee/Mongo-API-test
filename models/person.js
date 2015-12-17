var mongoose = require('mongoose');

var PersonSchema = new mongoose.Schema({
	name: String,
	age: Number
});

module.exports = mongoose.model('Person', PersonSchema);