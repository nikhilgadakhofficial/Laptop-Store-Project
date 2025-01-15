const Contact = require('./../models/contactModel')

const postContact = async (req,res)=>{

    const { fullName, message, mobileNo,email} = req.body;

    try {

        if (!fullName || !message || !mobileNo || !email) {
            return res.json({
                 success : false,
                message : "All fielde are mandatory"
            });
        }

        const newdata = await Contact.create({

            fullName,
            email,
            mobileNo,
            message
        });

        res.json({
            success : true,
            message : "Youer Contact Send Succesfully",
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


const getContact = async (req,res)=>{


    try {
        
    const getdata = await Contact.find();

    res.json({
        success : true,
        message : "All Contact Get Succefully",
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

module.exports  = {
    postContact,
    getContact
}