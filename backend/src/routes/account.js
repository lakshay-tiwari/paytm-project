const express = require("express");
const router = express.Router();
const { Account } = require("./../db");
const { authMiddleware } = require("../middleware");
const { transferSchema } = require("../schema");
const { default: mongoose } = require("mongoose");

router.get('/balance',authMiddleware,async function(req,res){
  const userId = req.userId;
  const account = Account.findOne({
    userId
  })

  // authMiddleware already check that user present or not

  res.status(200).json({
    balance: account.balance
  })

})

router.post('/transfer',authMiddleware, async function(req,res,next){
  const { success } = transferSchema.safeParse(req.body);
  if (!success){
    return res.status(400).json({ message: "Invalid inputs given"});
  }

  // use mongoose transaction for this 
  try{
    
    const session = await mongoose.startSession();
    session.startTransaction();
  
    const {to , amount } = req.body;
    const account = await Account.findOne({userId: req.userId}).session(session);  // always get account but we do check
  
    if (!account || account.balance < amount){
      await session.abortTransaction();
      res.status(400).json({message: "Insufficient Balance"});
    }
  
    const toAccount = await Account.findOne({ userId: to}).session(session);
  
    if (!toAccount){
      await session.abortTransaction();
      res.status(400).json({message: "Invalid Account"});
    }
  
    await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount }}).session(session);
    await Account.updateOne({ userId: to },{ $inc: { balance: amount }}).session(session);
  
    await session.commitTransaction();
    await session.endSession();
    res.status(200).json({
      message: "Transfer Complete"
    })

  }catch(err){
    next(err);
  }
})

module.exports = router;