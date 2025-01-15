const mongoose = require('mongoose');

const dbConact = async ()=>{

    const conn = await mongoose.connect(process.env.MONGODB_URL);

    if (conn) {
        console.log("DB CONNACT");   
    }
  
}

module.exports = dbConact;