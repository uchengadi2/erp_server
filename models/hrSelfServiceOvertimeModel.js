const mongoose = require("mongoose");

const hrSelfServiceOvertimeSchema = new mongoose.Schema(
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

const HrSelfServiceOvertime = mongoose.model(
  "HrSelfServiceOvertime",
  hrSelfServiceOvertimeSchema
);

module.exports = HrSelfServiceOvertime;
