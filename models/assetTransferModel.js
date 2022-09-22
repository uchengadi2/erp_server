const mongoose = require("mongoose");

const assetTransferSchema = new mongoose.Schema(
  {
    label: {
      type: String,
    },
    transferRefNumber: {
      type: String,
      unique: true,
    },
    purpose: {
      type: String,
      trim: true,
    },
    quantity: {
      type: Number,
    },
    assetMeasurementUnit: {
      type: mongoose.Schema.ObjectId,
      ref: "AssetMeasurementUnit",
    },

    assetType: {
      type: mongoose.Schema.ObjectId,
      ref: "AssetType",
    },
    assetStock: {
      type: mongoose.Schema.ObjectId,
      ref: "AssetStock",
    },
    sourceStore: {
      type: mongoose.Schema.ObjectId,
      ref: "Store",
    },
    serviceOutlet: {
      type: mongoose.Schema.ObjectId,
      ref: "ServiceOutlet",
    },
    description: {
      type: String,
      trim: true,
    },
    transferDate: {
      type: Date,
    },
    expectedDateOfAssetReturn: {
      type: Date,
    },
    actualDateOfAssetReturn: {
      type: Date,
    },
    totalTransferCost: {
      type: Number,
    },
    currency: {
      type: mongoose.Schema.ObjectId,
      ref: "Currency",
    },
    destinationStore: {
      type: mongoose.Schema.ObjectId,
      ref: "Store",
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

const AssetTransfer = mongoose.model("AssetTransfer", assetTransferSchema);

module.exports = AssetTransfer;
