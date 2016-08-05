var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var reviewSchema = new Schema({
    author: String,
    text: String,
    note: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    }






});

var review = mongoose.model('review', reviewSchema);

module.exports = review;
