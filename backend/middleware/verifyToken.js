const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  let token;

  let authHeader = req.headers.Authorization || req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "No token ,authorization defind",
      });
    }

    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decode;

      console.log("The user", req.user);
      next();
    } catch (error) {
      res.status(400).json({
        message: " Token is not valid",
        success : false
      });
    }
  }else{
    return res.status(401).json({
        message: "No token ,authorization defind",
      });
  }
};

module.exports= verifyToken;