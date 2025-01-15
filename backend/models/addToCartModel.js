const {Schema ,model } = require('mongoose');

const addToCartSchema = new Schema({
     
    product : {
        type : Array,
        required : true
    },
    quantity : {
        type : String,
        required : true,
    },
    user : {
        type : Schema.Types.ObjectId,
        ref : "User",
        required : true
    }
})

const AddToCart = model("AddToCart",addToCartSchema);

module.exports = AddToCart