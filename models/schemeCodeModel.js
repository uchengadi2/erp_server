const mongoose = require("mongoose");

const schemeCodeSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: [true, "This field cannot be empty"],
    },
    name: {
      type: String,
      required: [true, "This field cannot be empty"],
      unique: true,
    },
    description: {
      type: String,
      trim: true,
    },
    schemeType: {
      type: String,
      enum: [
        "cmm",
        "chc",
        "sea",
        "pcf",
        "plt",
        "lvs",
        "min",
        "hoa",
        "oab",
        "lon",
        "ran",
        "fld",
        "rle",
        "asa",
        "emc",
      ],
    },
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

const SchemeCode = mongoose.model("SchemeCode", schemeCodeSchema);

module.exports = SchemeCode;
