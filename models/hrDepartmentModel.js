const mongoose = require("mongoose");

const hrDepartmentSchema = new mongoose.Schema(
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

const HrDepartment = mongoose.model("HrDepartment", hrDepartmentSchema);

module.exports = HrDepartment;
