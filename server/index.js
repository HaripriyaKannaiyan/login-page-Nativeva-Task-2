const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const EmployeeModel = require('./models/employee');

app.use(express.json()); // Use express.json() as a function
app.use(cors());

mongoose.connect("mongodb://localhost:27017/employee", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Failed to connect to MongoDB", err));

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json("success");
        } else {
          res.json("The password is incorrect");
        }
      } else {
        res.json("No record existed");
      }
    })
    .catch(err => {
      res.status(500).json("An error occurred while logging in");
      console.error(err);
    });
});

app.post('/', (req, res) => {
  EmployeeModel.create(req.body)
    .then(employee => res.json(employee))
    .catch(err => {
      res.status(500).json("An error occurred while registering");
      console.error(err);
    });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
