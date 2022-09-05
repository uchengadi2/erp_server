const mongoose = require("mongoose");

const hrEmolumentPeriodSchema = new mongoose.Schema(
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

const HrEmolumentPeriod = mongoose.model(
  "HrEmolumentPeriod",
  hrEmolumentPeriodSchema
);

module.exports = HrEmolumentPeriod;
