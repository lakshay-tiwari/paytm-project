const mongoose = require("mongoose");
const { MONGODB_URI } = require("./config");

async function connectToDB(){
  try{
    await mongoose.connect(`${MONGODB_URI}/paytm`);
    console.log("connection to db successfully");
  }
  catch(e){
    console.log("unable to connect to database");
  }
}

connectToDB();

// defining schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, 
    trim: true,
    minlength: 3,
    maxlength: 30,
    lowercase: true,
    select: true,
  },

  password: {
    type: String,
    required: true,
    minlength: 6,    
    select: false,
  },

  firstName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
    select: true,
  },

  lastName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
    select: true,
  }
})


userSchema.set('toJSON',{
  transform: (doc,ret)=>{
    delete ret.password; 
    return ret;
  }
})


// to create custom method that remove password
// userSchema.methods.toSafeObject = function () { 
//   const obj = this.toObject();
//   delete obj.password;
//   return obj;
// };
// to use it -> to this 
// const user = User.findOne({anything})
// const newObj = user.toSafeObject(); this return everything except that you explicitly remove


const User = mongoose.model('User', userSchema);

module.exports = {
  User
}