const mongoose = require("mongoose");

const hrDesignationSchema = new mongoose.Schema(
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

const HrDesignation = mongoose.model("HrDesignation", hrDesignationSchema);

module.exports = HrDesignation;
