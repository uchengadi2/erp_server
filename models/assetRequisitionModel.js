const mongoose = require("mongoose");

const assetRequisitionSchema = new mongoose.Schema(
  {
    label: {
      type: String,
    },
    requisitionRefNumber: {
      type: String,
      unique: true,
    },
    purpose: {
      type: String,
      trim: true,
    },
    // initialStockQuantity: {
    //   type: Number,
    // },
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
    requisitionDate: {
      type: Date,
    },

    totalRequisitionCost: {
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

const AssetRequisition = mongoose.model(
  "AssetRequisition",
  assetRequisitionSchema
);

module.exports = AssetRequisition;
