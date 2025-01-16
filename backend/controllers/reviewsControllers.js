const Review = require('./../models/reviewsModel');


const postReviews = async (req,res)=>{

    const { fullName, message, mobileNo,email, porfileImageUrl } = req.body;

    try {

        if (!fullName || !message || !mobileNo || !email || !porfileImageUrl ) {
            return res.json({
                 success : false,
                message : "All fielde are mandatory"
            });
        }

        const newdata = await Review.create({

            fullName,
            email,
            mobileNo,
            message,
            porfileImageUrl 
        });

        res.json({
            success : true,
            message : "Youer Review Post Succesfully",
            data : newdata
        })
        
    } catch (error) {
        res.send({
            success : false,
            message: error.message,
            data: null,
          });
    }

}


const getReviews = async (req,res)=>{


    try {
        
    const getdata = await Review.find();

    res.json({
        success : true,
        message : "All Reviews Get Succefully",
        data : getdata
    });
    } catch (error) {
        res.send({
            success : false,
            message: error.message,
            data: null,
          });
    }
}

module.exports = {
getReviews,
postReviews
}