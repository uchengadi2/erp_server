const mongoose = require("mongoose");

const assetSetBatchSchema = new mongoose.Schema(
  {
    label: {
      type: String,
      required: [true, "This field cannot be empty"],
    },
    assetType: {
      type: mongoose.Schema.ObjectId,
      ref: "AssetType",
    },
    assetSet: {
      type: mongoose.Schema.ObjectId,
      ref: "AssetSet",
    },
    assetMeasurementUnit: {
      type: mongoose.Schema.ObjectId,
      ref: "AssetMeasurementUnit",
    },
    description: {
      type: String,
      trim: true,
    },
    quantity: Number,
    remainingQuantityInBatch: Number,
    batchRefNumber: String,
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

const AssetSetBatch = mongoose.model("AssetSetBatch", assetSetBatchSchema);

module.exports = AssetSetBatch;
