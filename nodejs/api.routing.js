/**
 * Created by a.nazaryan on 2/8/2017.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var CountrySchema = new mongoose.Schema({
    id: Number,
    name: String
});
var Country = mongoose.model('Country', CountrySchema);

var CitySchema = new mongoose.Schema({
    id: Number,
    name: String
});
var City = mongoose.model('City', CitySchema);

router.post('/countries', function(req, res) {
    Country.find({}, function(err, countries) {
        if (err)
            res.send(err);
        res.json(countries);
    });
});

router.post('/cities', function(req, res) {
    var parentcode = req.body.parentcode;
    City.find({'parentcode': parentcode}, function(err, cities) {
        if (err)
            res.send(err);
        res.json(cities);
    });
});


//export this router to use in our index.js
module.exports = router;