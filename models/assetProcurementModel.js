const mongoose = require("mongoose");

const assetProcurementSchema = new mongoose.Schema(
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

const AssetProcurement = mongoose.model(
  "AssetProcurement",
  assetProcurementSchema
);

module.exports = AssetProcurement;
