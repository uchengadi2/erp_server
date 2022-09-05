const mongoose = require("mongoose");

const assetDispositionSchema = new mongoose.Schema(
  {
    purpose: {
      type: String,
      required: [true, "This field cannot be empty"],
    },
    assetType: {
      type: mongoose.Schema.ObjectId,
      ref: "AssetType",
    },
    asset: {
      type: mongoose.Schema.ObjectId,
      ref: "Asset",
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

const AssetDisposition = mongoose.model(
  "AssetDisposition",
  assetDispositionSchema
);

module.exports = AssetDisposition;
