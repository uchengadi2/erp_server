const mongoose = require("mongoose");

const citySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "This field cannot be empty"],
    },
    state: {
      type: String,
      enum: ["lagos", "ogun", "oyo", "osun", "ekiti", "ondo"],
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

const City = mongoose.model("City", citySchema);
module.exports = City;
