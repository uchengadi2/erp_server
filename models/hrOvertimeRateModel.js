const mongoose = require("mongoose");

const hrOvertimeRateSchema = new mongoose.Schema(
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

const HrOvertimeRate = mongoose.model("HrOvertimeRate", hrOvertimeRateSchema);

module.exports = HrOvertimeRate;
