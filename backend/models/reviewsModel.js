const {Schema ,model } = require('mongoose');

 const reviewsSchema = new Schema({
    fullName : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true
    },
    message : {
        type : String,
        required : true
    },
    mobileNo : {
        type : String,
        required : true
    },
    porfileImageUrl :{
        type : String,
        required : true
    },
 });

 const Review = model("Review",reviewsSchema);

 module.exports = Review