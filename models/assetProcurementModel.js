const mongoose = require("mongoose");

const assetProcurementSchema = new mongoose.Schema(
  {
    procurementItem: {
      type: String,
      required: [true, "This field cannot be empty"],
    },
    assetType: {
      type: mongoose.Schema.ObjectId,
      ref: "AssetType",
    },
    quantity: {
      type: Number,
      required: [true, "This field cannot be empty"],
    },
    totalCostOfProcurement: {
      type: Number,
    },
    currency: {
      type: mongoose.Schema.ObjectId,
      ref: "Currency",
    },
    assetMeasurementUnit: {
      type: mongoose.Schema.ObjectId,
      ref: "AssetMeasurementUnit",
    },
    supplier: {
      type: mongoose.Schema.ObjectId,
      ref: "CrmSupplier",
    },
    procurementDate: {
      type: Date,
    },
    procurementRefNumber: {
      type: String,
      unique: true,
    },
    remainingQuantityForAllocation: {
      type: Number,
    },
    procuredBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
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

const AssetProcurement = mongoose.model(
  "AssetProcurement",
  assetProcurementSchema
);

module.exports = AssetProcurement;
