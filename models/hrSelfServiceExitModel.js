const mongoose = require("mongoose");

const hrSelfServiceExitSchema = new mongoose.Schema(
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

const HrSelfServiceExit = mongoose.model(
  "HrSelfServiceExit",
  hrSelfServiceExitSchema
);

module.exports = HrSelfServiceExit;
