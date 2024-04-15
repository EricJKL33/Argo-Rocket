import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: string,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", UserSchema);