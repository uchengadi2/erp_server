const mongoose = require("mongoose");

const assetInventoryMeasurementUnitSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "This field cannot be empty"],
    },
    symbol: {
      type: String,
      required: [true, "This field cannot be empty"],
    },
    assetInventoryType: {
      type: mongoose.Schema.ObjectId,
      ref: "AssetInventoryType",
    },
    description: {
      type: String,
      trim: true,
    },
    createdBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },

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

const AssetInventoryMeasurementUnit = mongoose.model(
  "AssetInventoryMeasurementUnit",
  assetInventoryMeasurementUnitSchema
);

module.exports = AssetInventoryMeasurementUnit;
