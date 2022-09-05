const mongoose = require("mongoose");

const hrSalaryGradeSchema = new mongoose.Schema(
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

const HrSalaryGrade = mongoose.model("HrSalaryGrade", hrSalaryGradeSchema);

module.exports = HrSalaryGrade;
