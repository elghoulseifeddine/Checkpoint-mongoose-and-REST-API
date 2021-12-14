const mongoose = require("mongoose");
const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "No name typed"],
  },
  age: Number,

  favoriteFoods: Array,
});

module.exports = Person = mongoose.model("Person", PersonSchema);
