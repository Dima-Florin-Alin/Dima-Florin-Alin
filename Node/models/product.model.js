var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create a schema
var Product = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        min: 0,
        required: true
    },
    curency: {
        type: String,
        required: true
    },
    description: String,
    picture: String,
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'review'
    }],
    created_at: Date,
    update_at: Date,
  });
        Product.methods.getPrice = function () {
        this.fullPrice = this.price + this.curency;

        return this.fullPrice;

    }

        Product.pre('save', function(next) {

        var currentDate = new Date();

        this.update_at = currentDate;

        if (!this.created_at) {
            this.created_at = currentDate;
        }
        next();




});

var Product = mongoose.model('Product', Product);

module.exports = Product;
