require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");

function authMiddleware(req,res,next){
  const token = req.headers.authorization;

  if (!token || !token.startsWith('Bearer ')){
    res.status(403).json({});
  }

  const jwtToken = token.split(" ")[1];

  try{
    const decoded = jwt.verify(jwtToken, JWT_SECRET);
    if (decoded.userId){
      req.userId = decoded.userId;
      next();
    }
    else{
      // or you can throw error
      // throw new Error ;
      res.status(403).json({});
    }
  }
  catch(e){
    res.status(403).json({});
  }
}

module.exports = {
  authMiddleware
}