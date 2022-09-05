const mongoose = require("mongoose");

const assetTypeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "This field cannot be empty"],
    },
    assetSubclass: {
      type: mongoose.Schema.ObjectId,
      ref: "AssetSubclass",
    },
    description: {
      type: String,
      trim: true,
    },
    code: {
      type: String,
      required: [true, "This field cannot be empty"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const AssetType = mongoose.model("AssetType", assetTypeSchema);

module.exports = AssetType;
