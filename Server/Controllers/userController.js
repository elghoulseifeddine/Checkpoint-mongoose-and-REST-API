const bcrypt = require("bcryptjs");
const User = require("../Models/user");
const Person = require("../Models/Person");

exports.userRegister = async (req, res) => {
  const newUser = new User({ ...req.body });
  const user = await user.findOne({ email: newUser.email });
  if (user) {
    return res.status(404).json({ msg: "Email already exist" });
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(newUser.password, salt);
    console.log(hash);

    newUser.password = hash;

    await newUser.save();
    res.status(201).json({ msg: "Register success" });
  } catch (error) {
    console.log(error);
    res.status(401).json({ msg: "Register Failed" });
  }
};

exports.personRegister = async (req, res) => {
  const newPerson = new Person({ ...req.body });
  // const user = await user.findOne({ email: newUser.email });
  // if (user) {
  //   return res.status(404).json({ msg: "Email already exist" });
  // }

  try {
    await newPerson.save();
    res.status(201).json({ msg: "Register person success" });
  } catch (error) {
    console.log(error);
    res.status(401).json({ msg: "Register person Failed" });
  }
};

exports.personUpdate = async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  let person = await Person.findById(id);
  person.favoriteFoods.push("Hamburger");
  try {
    const p = await Person.findByIdAndUpdate(id, {favoriteFoods : person.favoriteFoods} )
    res.status(201).json({ msg: "Updated person success" , p });
  } catch (error) {
    console.log("3 : ", error);
    res.status(401).json({ msg: "Updated person Failed" });
  }
};
exports.personDelete = async (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    // let person = await Person.findById(id);
    // person.favoriteFoods.remove("Hamburger");
    try {
      const p = await Person.findByIdAndRemove(id)
      res.status(201).json({ msg: "Deleted person success" , p });
    } catch (error) {
      res.status(401).json({ msg: "Deleted person Failed" });
    }
  };

  exports.personGet = async (req, res) => {
    // const people = new Person () ;
    // console.log(people)

    const allPersons = await Person.find()
    console.log(allPersons)
  
    try {
      await 
    //   people.find();
      res.status(201).json({ msg: "Get person success" , allPersons});
    } catch (error) {
      console.log(error);
      res.status(401).json({ msg: "Get person Failed" });
    }
  };

