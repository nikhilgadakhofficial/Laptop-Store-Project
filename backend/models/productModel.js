const {Schema ,model } = require('mongoose');

const productSchema = new Schema({
    title : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required: true
    },
    productImageUrl : {
        type : String,
        required : true,
    },
    price : {
        type : String,
        required : true
    },
    stars :{
     type : String,
     required : true
    },
    stock : {
     type : String,
     required : true,
    },
    reviews : {
        type : String,
     required : true,
    },
    feature : {
     type : Boolean,
    },
    category : {
        type : String,
     required : true,
    },
})

const Product = model("Product",productSchema);

module.exports = Product