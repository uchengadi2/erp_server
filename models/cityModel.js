const mongoose = require("mongoose");

const citySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "This field cannot be empty"],
    },
    code: {
      type: String,
      required: [false, "This field cannot be empty"],
    },
    state: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "State",
      },
    ],
    country: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "country",
      },
    ],
    description: {
      type: String,
      trim: true,
    },
    createdBy: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
    dateCreated: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const City = mongoose.model("City", citySchema);
module.exports = City;
