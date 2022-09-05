const mongoose = require("mongoose");

const hrCompensationSalarySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "This field cannot be empty"],
    },
    description: {
      type: String,
      trim: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const HrCompensationSalary = mongoose.model(
  "HrCompensationSalary",
  hrCompensationSalarySchema
);

module.exports = HrCompensationSalary;
