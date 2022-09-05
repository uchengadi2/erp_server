const mongoose = require("mongoose");

const hrSelfserviceLeaveSchema = new mongoose.Schema(
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

const HrSelfserviceLeave = mongoose.model(
  "HrSelfserviceLeave",
  hrSelfserviceLeaveSchema
);

module.exports = HrSelfserviceLeave;
