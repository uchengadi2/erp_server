const mongoose = require("mongoose");

const hrCompensationSalaryAdvanceSchema = new mongoose.Schema(
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

const HrCompensationSalaryAdvance = mongoose.model(
  "HrCompensationSalaryAdvance",
  hrCompensationSalaryAdvanceSchema
);

module.exports = HrCompensationSalaryAdvance;
