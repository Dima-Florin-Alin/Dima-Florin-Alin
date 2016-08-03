var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create a product schema

var Product = new Schema({

    id: {
        type: Number,
        required: true
    },
    picture: String,
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    curency: String,
    onSale: Boolean,
    description: String,
    specifications: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'specifications'
    }],
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'review'
    }],
    pictures: Array







});


Product.methods.getPrice = function() {
    this.fullPrice = this.price + this.curency;

    return this.fullPrice;

}



var productTemplate = mongoose.model('product', Product);

module.exports = productTemplate;
