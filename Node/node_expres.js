var express = require('express');
var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/node_database');


var product = require('./models/product.model.js');
var review = require('./models/Review.model.js');

var app = express();

app.get('/', function(req, res) {
    res.send('Hello Express!');


});

app.listen(3000, function() {
    console.log('Express listening on port 3000');


});

// var newProduct = product({
// name: 'First product',
// price: 199,
// curency: '$',
// description: 'created',
// picture: 'no picture yet'
//
//
// });
//
// // newProduct.save(function(err, product){
// // if(err) throw err;
// //
// // //console.log(product);
// //
// // });
//
// var newreview = review({
// author:'Dima Florin',
// text: 'good product',
// note: 4
//
//
// });
//
// // newreview.save(function(err, review){
// // if(err) throw err;
// //
// // //console.log(review);
// //
// // });
//
// // product.find({price:100}, function(err, users){
// //
// // if(err) throw err;
// //
// // console.log(users);
// //
// //
// // });
// //
// // product.findById('57a05e85ca52f2ca1f43de6d', function(err,product){
// // if(err) throw err;
// // product.price = 500;
// // product.save(function(err){
// // if(err) throw err;
// //
// // console.log('Prouct successuly updated');
// //
// //
// // });
// //
// review.findById('57a05f2b36f412dc20d3843f', function(err, review){
// if(err) throw err;
// product.reviews.push(review.id);
//
// product.save(function(err){
// 	if(err) throw err;
// 	console.log('review successuly updated');
// })
// })
// //
// // });
//
// // product.find().populate('reviews').exec(function(err, usersWreview){
// // 	if(err) throw err;
// // 	//console.log(usersWreview);
// //
// // });
//
// product.findByIdAndRemove('57a06e9e5f444a8d2c86181c', function(err)
// {
// 	if(err) throw err;
// 	console.log('User deleted');
// });
