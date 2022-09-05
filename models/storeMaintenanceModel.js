const mongoose = require("mongoose");

const storeMaintenanceSchema = new mongoose.Schema(
  {
    label: {
      type: String,
      required: [true, "This field cannot be empty"],
    },
    storeType: {
      type: mongoose.Schema.ObjectId,
      ref: "StoreType",
    },
    serviceOutlet: {
      type: mongoose.Schema.ObjectId,
      ref: "ServiceOutlet",
    },
    store: {
      type: mongoose.Schema.ObjectId,
      ref: "Store",
    },
    storeMaintenanceType: {
      type: mongoose.Schema.ObjectId,
      ref: "StoreMaintenanceType",
    },
    description: {
      type: String,
      trim: true,
    },
    purpose: {
      type: String,
      trim: true,
    },
    maintenanceCommencementDate: {
      type: Date,
    },
    maintenanceEndDate: {
      type: Date,
    },
    cost: {
      type: Number,
      default: 0,
    },
    createdBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    updatedBy: {
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

const StoreMaintenance = mongoose.model(
  "StoreMaintenance",
  storeMaintenanceSchema
);

module.exports = StoreMaintenance;
