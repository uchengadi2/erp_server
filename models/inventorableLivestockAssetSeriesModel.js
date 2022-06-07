const mongoose = require("mongoose");

const inventoriableLivestockAssetSeriesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "This field cannot be empty"],
    },
    seriesId: {
      type: String,
      unique: true,
    },
    assetType: {
      type: mongoose.Schema.ObjectId,
      ref: "AssetType",
    },
    serviceOutlet: {
      type: mongoose.Schema.ObjectId,
      ref: "ServiceOutlet",
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

const InventoriableLivestockSeries = mongoose.model(
  "InventoriableLivestockSeries",
  inventoriableLivestockAssetSeriesSchema
);

module.exports = InventoriableLivestockSeries;
