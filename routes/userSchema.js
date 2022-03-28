const mongoose = require("mongoose");
// Define schema
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstName : {
      type: String
  },
  lastName : {
    type: String
  },
  userName : {
    type: String, 
    unique: true
  },
  email:{
    type:String,
    unique :true
  },
  password:{
      type: String,
      unique : true
  }
},
{collection:'users',
   versionKey: false
});

// Compile model from schema
module.exports = mongoose.model("User", UserSchema);
