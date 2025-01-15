const {Schema ,model } = require('mongoose');


const orderSchema = new Schema({
    fullName : {
        type : String,
        required : true,
    },
    porfileImageUrl :{
        type : String,
        default : "https://i.pravatar.cc/?img=13"
    },
    mobileNo :{
        type : String,
        required : true
    },
    paymenttype : {
        type : String,
        required : true,
        enum : ["Cash On Delivery","Other"],
    },
    address : {
        type : String,
        required : true,
    },
    city : {
        type : String,
        required : true,
    },
    state : {
        type : String,
        required : true,
    },
    product : {
      type : Object,
      required : true,
    },
    status : {
        type : String,
         default:"Food Processing",
    },
    quantity : {
        type : String,
        required : true,
    },
    total : {
        type : String,
        required : true,
    },
    user : {
        type : Schema.Types.ObjectId,
        ref : "User",
        required : true
    }

});

const Order = model("Order",orderSchema);

module.exports = Order;