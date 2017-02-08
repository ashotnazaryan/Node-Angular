/**
 * Created by a.nazaryan on 2/8/2017.
 */
var express = require('express');
var router = express.Router();

router.post('/api/countries', function(req, res) {
    Country.find({}, function(err, countries) {
        if (err)
            res.send(err);
        res.json(countries);
    });
});

router.post('/api/cities', function(req, res) {
    var parentcode = req.body.parentcode;
    City.find({'parentcode': parentcode}, function(err, cities) {
        if (err)
            res.send(err);
        res.json(cities);
    });
});


//export this router to use in our index.js
module.exports = router;