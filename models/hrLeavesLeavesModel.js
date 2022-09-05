const mongoose = require("mongoose");

const hrLeavesLeavesSchema = new mongoose.Schema(
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

const HrLeavesLeaves = mongoose.model("HrLeavesLeaves", hrLeavesLeavesSchema);

module.exports = HrLeavesLeaves;
