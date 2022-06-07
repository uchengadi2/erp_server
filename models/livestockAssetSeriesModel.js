const mongoose = require("mongoose");

const livestockAssetSeriesSchema = new mongoose.Schema(
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

const LivestockSeries = mongoose.model(
  "LivestockSeries",
  livestockAssetSeriesSchema
);

module.exports = LivestockSeries;
