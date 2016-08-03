var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/Qshop_database');


var product = require('./models/product.model.js');
var review = require('./models/review.model.js');
var specs = require('./models/specifications.model.js');

var application = express();
application.use(bodyParser.urlencoded({
    extended: false
}));
application.use(bodyParser.json());



application.get('/products', function(req, res) {
    product.find().exec(function(err, products) {
        if (err) {
            console.log("cannot find products");
        }
        res.send(products);

    });

});

application.listen(8000, function() {
    console.log('Express listening on port 8000');


});

// application.post('/', function(req, res) {
//     var addProd = product({
//         id: req.body.id,
//         name: req.body.name,
//         price: req.body.price,
//         description: req.body.description
//     });
//     addProd.save(function(err, addProd) {
//         if (err) throw err;
//
//         res.json(201, addProd)
//     });
//
// });
//
// application.listen(8001, function() {
//     console.log('Express listening on port 8001');
//
//
// });


application.post('/reviews', function(req, res) {
    var newreview = review({
        name: req.body.name,
        text: req.body.text
    });
    newreview.save(function(err, newreview) {
        if (err) throw err;

        res.json(201, newreview)

    });
});
application.listen(8002, function() {
            console.log('Express listening on port 8002');

});


review.find({}, function(err, review){
if(err) throw err;
product.reviews.push(review.id);

product.find().populate('reviews').exec(function(err, usersreview, req, res){
	if(err) throw err;
  res.send("reviews added");
    });
  });
