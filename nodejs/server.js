/**
 * Created by a.nazaryan on 9/27/2016.
 */

//C:\Program Files\MongoDB\Server\3.4\bin>mongod
//npm run serve
//npm install --save-dev gulp   save to dependencies ////

var express  = require('express');
var app = express();                               // create our public w/ express
var mongoose = require('mongoose');                     // mongoose for mongodb
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var apiRouting = require('./api.routing.js');

mongoose.connect('mongodb://localhost:27017/test');     // connect to mongoDB database on modulus.io

app.use(express.static('public'));                // set the static files location /public_old/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());


//var CountrySchema = new mongoose.Schema({
//    id: Number,
//    name: String
//});
//var Country = mongoose.model('Country', CountrySchema);
//
//var CitySchema = new mongoose.Schema({
//    id: Number,
//    name: String
//});
//var City = mongoose.model('City', CitySchema);
//
//app.post('/api/countries', function(req, res) {
//    Country.find({}, function(err, countries) {
//        if (err)
//            res.send(err);
//        res.json(countries);
//    });
//});
//
//app.post('/api/cities', function(req, res) {
//    var parentcode = req.body.parentcode;
//    City.find({'parentcode': parentcode}, function(err, cities) {
//        if (err)
//            res.send(err);
//        res.json(cities);
//    });
//});

app.get('', function(req, res) {
    res.sendFile('index.html', { root: "../public" });
});

//both index.js and things.js should be in same directory
app.use('/api', apiRouting);

app.listen(1111); // app.listen(port, [host], [backlog], [callback]]);
console.log("App listening on port 1111");

