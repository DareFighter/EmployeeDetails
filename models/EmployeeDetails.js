const mongoose = require("mongoose");

const employeeDetailsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  MobileNo: {
    type: Number,
    required: true,
  },
  Designation: {
    type: String,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
  },
  Course: {
    type: String,
    required: true,
  },
  Img: {
    type: String,
    required: true,
  },
});

const EmployeeDetails = mongoose.model(
  "EmployeeDetails",
  employeeDetailsSchema
);

module.exports = EmployeeDetails;
