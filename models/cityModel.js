const mongoose = require("mongoose");

const citySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "This field cannot be empty"],
    },
    state: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "State",
      },
    ],
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
