const mongoose = require("mongoose");

const hrExitClearanceSchema = new mongoose.Schema(
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

const HrExitClearance = mongoose.model(
  "HrExitClearance",
  hrExitClearanceSchema
);

module.exports = HrExitClearance;
