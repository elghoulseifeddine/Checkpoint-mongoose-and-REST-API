require("dotenv").config({ path: "./config/.env" });
const express= require("express");
const connectDB = require("./Config/ConnectDb");
const Person = require("./Routes/Person");
const user = require("./Routes/user");
const app = express();
connectDB();
app.use(express.json());
// app.use("/myUsers", user)
app.use("/myPeople", Person)
const PORT= process.env.PORT



app.listen(PORT,(err) => {
    err
      ? console.log("Server connection failed")
      : console.log(`Server connected successfully on PORT ${PORT}`);
  });