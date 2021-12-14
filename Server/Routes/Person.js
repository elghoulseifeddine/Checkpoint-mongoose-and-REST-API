const express = require("express");
const { personRegister, personUpdate,personDelete,personGet } = require("../controllers/userController");

const Router = express.Router();

Router.post("/registerPerson", personRegister);
Router.put("/updatePerson/:id", personUpdate);
Router.delete("/deletePerson/:id", personDelete);
Router.get("/getPerson", personGet);


module.exports = Router;