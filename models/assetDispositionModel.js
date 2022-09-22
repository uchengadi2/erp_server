const mongoose = require("mongoose");

const assetDispositionSchema = new mongoose.Schema(
  {
    label: {
      type: String,
    },
    dispositionRefNumber: {
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
    dispositionType: {
      type: mongoose.Schema.ObjectId,
      ref: "AssetDispositionType",
    },
    assetType: {
      type: mongoose.Schema.ObjectId,
      ref: "AssetType",
    },
    assetStock: {
      type: mongoose.Schema.ObjectId,
      ref: "AssetStock",
    },
    store: {
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
    dispositionDate: {
      type: Date,
    },
    totalDispositionCost: {
      type: Number,
    },
    currency: {
      type: mongoose.Schema.ObjectId,
      ref: "Currency",
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

const AssetDisposition = mongoose.model(
  "AssetDisposition",
  assetDispositionSchema
);

module.exports = AssetDisposition;
