const mongoose = require("mongoose");

const assetMaintenanceSchema = new mongoose.Schema(
  {
    label: {
      type: String,
    },
    maintenanceRefNumber: {
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
    maintenanceType: {
      type: mongoose.Schema.ObjectId,
      ref: "MaintenanceType",
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
    maintenanceDate: {
      type: Date,
    },
    totalMaintenanceCost: {
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

const AssetMaintenance = mongoose.model(
  "AssetMaintenance",
  assetMaintenanceSchema
);

module.exports = AssetMaintenance;
