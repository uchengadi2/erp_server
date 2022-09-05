const mongoose = require("mongoose");

const hrJobDescriptionSchema = new mongoose.Schema(
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

const HrJobDescription = mongoose.model(
  "HrJobDescription",
  hrJobDescriptionSchema
);

module.exports = HrJobDescription;
