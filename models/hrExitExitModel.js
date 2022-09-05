const mongoose = require("mongoose");

const hrExitExitSchema = new mongoose.Schema(
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

const HrExitExit = mongoose.model("HrExitExit", hrExitExitSchema);

module.exports = HrExitExit;
