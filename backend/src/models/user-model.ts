const {
    Schema,
    model
  } = require("mongoose");
  
  const MySchema = new Schema({
    firstName: {
      type: String,
      required: true,
      maxlength: 50
    },
    lastName: {
      type: String,
      required: true,
      maxlength: 50
    },
    email: {
      type: String,
      required: true,
      maxlength: 50
    },
    password: {
      type: String,
      required: true,
      maxlength: 50
    },
    mobile: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  
  export const UserModel = model("user", MySchema)
  