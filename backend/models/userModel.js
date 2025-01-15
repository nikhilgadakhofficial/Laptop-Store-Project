const {Schema , model} = require('mongoose');

const userSchema = new Schema({
    fullName : {
        type: String,
        required :true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    mobileNo :{
        type : String,
        required : true
    },
    porfileImageUrl :{
        type : String,
        default : "https://i.pravatar.cc/300"
    },
    password : {
        type : String,
        required : true
    },
    role : {
        type : String,
        enum : ["USER","ADMIN"],
        default : "USER"
    }
});

const User = model("User",userSchema);

module.exports = User 