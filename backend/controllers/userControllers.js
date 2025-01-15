const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const User = require('./../models/userModel');

const signupPost = async (req,res)=>{
 
    const { fullName , email ,role , password ,mobileNo , porfileImageUrl } = req.body;

    try {

        if (!fullName || !email || !password || !mobileNo ) {
            return  res.status(400).json({
                success : false,
                message : "All fielde are mandatory",
            });
        }


        const isAvailable = await User.findOne({email : email});

        if (isAvailable) {
            return res.status(400).json({
                success : false,
                message : "This Email Alrady Taken"
            });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser  = await User.create({
            fullName,
            email,
            role,
            mobileNo,
            password : hashPassword,
            porfileImageUrl
        });

        res.status(200).json({
            success : true,
            message : "Signup Successful",
            data : newUser
        });
        
    } catch (error) {
       res.status(400).json({
        success : false,
        message :error.message,
        data : null
    })
    }
}

const loginPost = async (req,res)=>{

  const {email , password} = req.body;

    try {
        const isAvailable = await User.findOne({email : email});

        if (!isAvailable) {
            return res.json({
                success : false,
                message: "email is wrong",
              });
        }
        
        if (await (bcrypt.compare(password,isAvailable.password))) {

            const token = jwt.sign(
                {
                id : isAvailable._id,
                role : isAvailable.role,
                fullName : isAvailable.fullName,

                }, process.env.JWT_SECRET,
                {expiresIn : "7d"}
            );

           return res.json({
                success : true,
                message: "login successfully",
                data: isAvailable,
                tokenData : token
              });
        } else {
           return res.json({
                success : false,
                message: " Password is wrong",
              });
        }
        
    } catch (error) {
        res.status(400).json({
            success : false,
            message :error.message,
            data : null
        })
    }

}

const allUsers = async (req,res)=>{

    try {
        const allUser = await User.find();
        
        res.json({
            success : true,
            message : "All User Fetched Successfully",
            data : allUser
        })
    } catch (error) {
        res.status(400).json({
            success : false,
            message :error.message,
            data : null
        })
    }
}

const deleteUser = async (req,res)=>{
     

  try {
    const { id } = req.params;

   await User.deleteOne({_id : id});

   res.json({
    success : true,
    message: "User delete successfully",
    data: null,
  });

  } catch (error) {
    res.json({
        success : false,
      message: error.message,
      data: null,
    });
  }
}

const getProfile = async (req,res)=>{

    try {

        const loginUser = await User.findById(req.user.id);

        res.json({
            success : true,
            message : `Hii ${loginUser.fullName}`,
            data:loginUser
        })
        
    } catch (error) {
        res.json({
            success : false,
          message: error.message,
          data: null,
        });
    }
    
     


}

module.exports = {
    signupPost,
    loginPost,
    allUsers,
    deleteUser,
    getProfile
}