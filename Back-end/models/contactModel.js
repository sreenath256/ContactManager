const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  user_id:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Users",
    required:true
  },
  name: {
    type: String,
    required: [true, "Please add the contact name"],
  },
  email: {
    type: String,
    required: [true, "Please add the contact email"],
  },
  phone: {
    type: String,
    required: [true, "Please add the contact phone number"],
    maxlength:10,
    
  },
});

module.exports = mongoose.model("contacts", contactSchema);
