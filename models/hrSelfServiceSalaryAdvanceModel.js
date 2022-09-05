const mongoose = require("mongoose");

const hrSelfServiceSalaryAdvanceSchema = new mongoose.Schema(
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

const HrSelfServiceSalaryAdvance = mongoose.model(
  "HrSelfServiceSalaryAdvance",
  hrSelfServiceSalaryAdvanceSchema
);

module.exports = HrSelfServiceSalaryAdvance;
