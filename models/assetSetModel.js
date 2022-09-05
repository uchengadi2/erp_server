const mongoose = require("mongoose");

const assetSetSchema = new mongoose.Schema(
  {
    label: {
      type: String,
      required: [true, "This field cannot be empty"],
    },
    assetType: {
      type: mongoose.Schema.ObjectId,
      ref: "AssetType",
    },
    description: {
      type: String,
      trim: true,
    },
    quantity: Number,
    remainingQuantity: Number,
    assetMeasurementUnit: {
      type: mongoose.Schema.ObjectId,
      ref: "AssetMeasurementUnit",
    },

    setRefNumber: String,
    acquisitionDate: Date,
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

const AssetSet = mongoose.model("AssetSet", assetSetSchema);

module.exports = AssetSet;
