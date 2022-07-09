const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [false, "This field cannot be empty"],
    },
    code: {
      type: String,
      required: [true, "This field cannot be empty"],
      unique: true,
    },
    description: {
      type: String,
      trim: true,
    },
    country: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Country",
      },
    ],

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Location = mongoose.model("Location", locationSchema);

module.exports = Location;
