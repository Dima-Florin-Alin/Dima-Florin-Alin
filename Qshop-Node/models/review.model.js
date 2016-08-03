var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a review Schema


var reviewSchema = new Schema({

    name: String,
    text: String



});

var review = mongoose.model('review', reviewSchema);

module.exports = review;
