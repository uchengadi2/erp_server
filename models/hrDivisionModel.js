const mongoose = require("mongoose");

const hrDivisionSchema = new mongoose.Schema(
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

const HrDivision = mongoose.model("HrDivision", hrDivisionSchema);

module.exports = HrDivision;
