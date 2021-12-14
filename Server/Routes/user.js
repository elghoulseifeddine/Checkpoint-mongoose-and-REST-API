const express = require("express");
const { userRegister } = require("../controllers/userController");

const Router = express.Router();

Router.post("/register", userRegister);


module.exports = Router;