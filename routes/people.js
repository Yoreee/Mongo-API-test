var express = require('express');
var router = express.Router();

var mongoose = require('mongoose')
var People = require('../models/person.js')


router.get('/', function(req, res, next) {
	People.find(function (err, person) {
		if (err) return next(err);
		res.json(person)
	})
})


router.post('/', function(req, res, next) {
  	People.create(req.body, function (err, post) {
    	if (err) return next(err);
    	res.json(post);
  	});
});


router.get('/:id', function(req, res, next) {
  People.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


router.put('/:id', function(req, res, next) {
  People.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.delete('/:id', function(req, res, next) {
  People.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;