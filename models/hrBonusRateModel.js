const mongoose = require("mongoose");

const hrBonusRateSchema = new mongoose.Schema(
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

const HrBonusRate = mongoose.model("HrBonusRate", hrBonusRateSchema);

module.exports = HrBonusRate;
