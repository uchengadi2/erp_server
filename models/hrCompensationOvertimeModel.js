const mongoose = require("mongoose");

const hrCompensationOvertimeSchema = new mongoose.Schema(
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

const HrCompensationOvertime = mongoose.model(
  "HrCompensationOvertime",
  hrCompensationOvertimeSchema
);

module.exports = HrCompensationOvertime;
