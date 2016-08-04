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


application.listen(8000, function() {
    console.log('Express listening on port 8000');


});



var err = new Error('Operation not allowed');

              // GET all the products
application.get('/products', function(req, res) {
    product.find().exec(function(err, products) {
        if (err) {
            console.log(err.message);
        }
        res.send(products);

    });

});


                // GET product by id and display it
application.get('/products/:id', function(req, res) {
  var product_id=req.params.id;
    product.find({id:product_id}).exec(function(err, product) {
        if (err) {
            console.log(err.message);
        }
        res.send(product);

    });

});




          //POST products in the database

application.post('/', function(req, res) {
    var addProd = product({
        id: req.body.id,
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    });
    addProd.save(function(err, addProd) {
        if (err) console.log(err.message);

        res.json(201, addProd)
    });

});



          //POST reviews in database
application.post('/reviews', function(req, res) {
    var newreview = review({
        name: req.body.name,
        text: req.body.text
    });
    newreview.save(function(err, newreview) {
        if (err) console.log(err.message);

        res.json(201, newreview)

    });
});

            //update product
application.put('/products/:id', function(req, res){
  var updateProduct = product({
    id: req.body.id,
    name: req.body.name,
    price: req.body.price


  });
  updateProduct.save(function(err, updateProduct){

    if(err) console.log(err.message);

    res.json(201, updateProduct)
  });

});

// review.find({}, function(err, review){
// if(err) throw err;
// product.reviews.push(review.id);
//
// product.find().populate('reviews').exec(function(err, usersreview, req, res){
// 	if(err) throw err;
//   res.send("reviews added");
//     });
//   });


application.delete('/products/:id', function(req, res){


  product.remove({id:req.params.id}, function(err){
    if (err) res.send(err.message);
    res.json({message: 'Deleted'})
  });



});
