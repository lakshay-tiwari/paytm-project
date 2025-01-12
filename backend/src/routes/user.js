const express = require("express");
const router = express.Router();
const { JWT_SECRET } = require("./../config");
const jwt = require("jsonwebtoken");
const { User } = require("./../db");
const { z } = require("zod");
const { authMiddleware } = require("../middleware");

const signupSchema = z.object({
  username: z.string(),
  password: z.string(),
  firstName: z.string(),
  lastName: z.string()
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
    const token = jwt.sign({
      userId: addUser._id 
    }, JWT_SECRET)  

    res.status(200).json({
      message: "User created successfully",
      token: token
    });

  } catch(e){
    console.log('something wrong ');
    next(e);
  }

})

const signinSchema = z.object({
  username: z.string(),
  password: z.string()
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
      },JWT_SECRET)

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


const updateSchema = z.object({
  password:  z.string().optional(),
  firstName: z.string().optional(),
  lastName:  z.string().optional()
})


router.put('/', authMiddleware ,async function(req,res){
  const updateBody = req.body;
  const userId = req.userId;
  const { success } = updateSchema.safeParse(updateBody);

  if (!success){
    return res.json({message: "given Schema not valid"});
  }


  await User.updateOne({
    _id: userId
  }, {
    $set: updateBody
  });

  res.status(200).json({ message: "Updated Successfully!" });
})


// route to get users from the backend, filterable via firstName, lastname

// router.get('/bulk', authMiddleware,async function(req,res){
//   const filter = req.query.filter;
  
// })


module.exports = router;