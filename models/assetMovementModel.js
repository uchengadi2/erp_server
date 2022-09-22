const mongoose = require("mongoose");

const assetMovementSchema = new mongoose.Schema(
  {
    label: {
      type: String,
    },
    movementRefNumber: {
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
    movementType: {
      type: mongoose.Schema.ObjectId,
      ref: "MovementType",
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
    movementDate: {
      type: Date,
    },
    expectedDateOfAssetReturn: {
      type: Date,
    },
    actualDateOfAssetReturn: {
      type: Date,
    },
    totalMovementCost: {
      type: Number,
    },
    currency: {
      type: mongoose.Schema.ObjectId,
      ref: "Currency",
    },
    destination: {
      type: String,
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

const AssetMovement = mongoose.model("AssetMovement", assetMovementSchema);

module.exports = AssetMovement;
