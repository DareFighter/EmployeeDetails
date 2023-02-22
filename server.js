const express = require("express");
const EmployeeDetails = require("./models/EmployeeDetails");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.options("*", cors());
app.use(express.json());

app.get("/", async (req, res) => {
  const employeeDetails = await EmployeeDetails.find();

  if (!employeeDetails) {
    res.status(500).json({
      success: false,
    });
  }
  res.send(employeeDetails);
});

app.post("/postEmployeeDetails", (req, res) => {
  const employeeDetails = new EmployeeDetails({
    name: req.body.name,
    Email: req.body.Email,
    MobileNo: req.body.MobileNo,
    Designation: req.body.Designation,
    Gender: req.body.Gender,
    Course: req.body.Course,
    Img: req.body.Img,
  });

  employeeDetails
    .save()
    .then((createdEmployeeDetails) => {
      res.status(201).json(createdEmployeeDetails);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
        success: false,
      });
    });
});

mongoose.set("strictQuery", true);
mongoose
  .connect(
    "mongodb+srv://shreyaskumarr62:shreyas@cluster0.din74w0.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "EmployeeDetails",
    }
  )
  .then(() => {
    console.log("Database connection is ready...");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log(`Server is Running on http://localhost:3000 port`);
});
