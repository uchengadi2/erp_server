const mongoose = require("mongoose");

const plantationAssetSeriesSchema = new mongoose.Schema(
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

const PlantationSeries = mongoose.model(
  "PlantationSeries",
  plantationAssetSeriesSchema
);

module.exports = PlantationSeries;
