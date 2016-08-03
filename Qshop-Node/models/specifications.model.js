var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a review Schema


var specs = new Schema({

    label: String,
    value: String



});

var specs = mongoose.model('specifications', specs);

module.exports = specs;
