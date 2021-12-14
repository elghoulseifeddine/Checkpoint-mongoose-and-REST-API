const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  adress: String,
  phoneNumber: String,
  password: String,
});

module.exports = User = mongoose.model("User", userSchema);

