const mongoose = require("mongoose");

const assetMovementSchema = new mongoose.Schema(
  {
    name: {
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

const AssetMovement = mongoose.model("AssetMovement", assetMovementSchema);

module.exports = AssetMovement;
