const mongoose = require("mongoose");

const hrSalaryGradeDeductableSchema = new mongoose.Schema(
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

const HrSalaryGradeDeductable = mongoose.model(
  "HrSalaryGradeDeductable",
  hrSalaryGradeDeductableSchema
);

module.exports = HrSalaryGradeDeductable;
