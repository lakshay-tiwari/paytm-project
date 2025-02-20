require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { User, Account } = require("./../db");
const { authMiddleware } = require("../middleware");
const { signupSchema, signinSchema, updateSchema, filterSchema } = require("./../schema");

router.get('/me', authMiddleware, async function(req,res,next){
  // req.userId
  try {
    const findUser = await User.findById(req.userId);
    if (!findUser || !findUser.firstName){
      return res.json({});
    }
    
    res.json({
      isLogged: true ,
      firstName: findUser.firstName,
    })

  } catch (error) {
    next(error);
  }
})

router.post('/signup',async function(req,res,next){
  const body = req.body;
  const { success } = signupSchema.safeParse(body);
  if (!success){
    return res.json({message: "inputs given do not met require condition"});
  }

  const findUser = await User.findOne({
    username: body.username
  })

  if (findUser!=null){
    return res.status(411).json({
      message: "user already exist!"
    })
  }

  try{
    const addUser = await User.create(body);

    // random money given for this 
    await Account.create({
      userId: addUser._id,
      balance: 1 + Math.random()*10000
    });

    const token = jwt.sign({
      userId: addUser._id 
    }, JWT_SECRET);

    res.status(200).json({
      message: "User created successfully",
      token: token
    });

  } catch(e){
    console.log('something wrong ');
    next(e);
  }

})

router.post('/signin',async function(req,res,next){
  const body = req.body; // body has username(unique) and password 
  const { success } = signinSchema.safeParse(body);

  if (!success){
    return res.json({
      message: "inputs given do not met require condition"
    });
  }

  try{

    const user = await User.findOne({
      username: body.username
    });

    if (user && user.password == body.password){

      const token = jwt.sign({
        userId: user._id
      },JWT_SECRET);

      res.json({
        message: 'User exist in database',
        token: token
      })
    }

    else{
      res.json({
        message: "User does not exist in database"
      })
    }
  }catch(e){
    next(e);
  }
})




router.put('/', authMiddleware ,async function(req,res){
  const updateBody = req.body;
  const userId = req.userId;
  const { success } = updateSchema.safeParse(updateBody);

  if (!success){
    return res.status(411).json({message: "Error while updating information"});
  }


  await User.updateOne({
    _id: userId
  }, {
    $set: updateBody
  });

  res.status(200).json({ message: "Updated Successfully!" });
})


// route to get users from the backend, filterable via firstName, lastname

router.get('/bulk', authMiddleware,async function(req,res){
  const filter = req.query.filter || "";
  const { success } = filterSchema.safeParse(filter);

  if (!success){
    return res.status(411).json({message: "Error while fetching information"});
  }


  // $regex -> query selector -> used to find like things
  // $options -> to make case insensitive

  const usersList = await User.find({
    $or: [
      {
        firstName: { $regex: filter , $options: "i" }
      },
      {
        lastName: { $regex: filter , $options: "i" }
      }
    ]
  })

  // remove own name from array by user
  const users = usersList.map((user)=>{
    return {
      firstName: user.firstName,
      lastName: user.lastName, 
      _id: user._id
    };
  })
  
  const finalUsers = users.filter((user)=>{
    if (user._id != req.userId) return user ;
  })

  res.status(200).json({
    finalUsers
  });

})


module.exports = router;

// const users = usersList.map((user)=>{
//   if (user._id!=req.userId){
//     return {
//       firstName: user.firstName,
//       lastName: user.lastName, 
//       _id: user._id
//     }
//   }
// })