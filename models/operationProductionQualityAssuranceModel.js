const mongoose = require("mongoose");

const operationProductionQualityAssuranceSchema = new mongoose.Schema(
  {
    label: {
      type: String,
      required: [false, "This field cannot be empty"],
    },
    refNumber: {
      type: String,
    },
    serviceOutlet: {
      type: mongoose.Schema.ObjectId,
      ref: "ServiceOutlet",
    },
    operation: {
      type: mongoose.Schema.ObjectId,
      ref: "OperationOperation",
    },
    qualityAssuranceType: {
      type: mongoose.Schema.ObjectId,
      ref: "OperationQualityAssuranceType",
    },
    processingType: {
      type: mongoose.Schema.ObjectId,
      ref: "operationProcessingType",
    },
    process: {
      type: mongoose.Schema.ObjectId,
      ref: "OperationProcessing",
    },
    inventoryType: {
      type: mongoose.Schema.ObjectId,
      ref: "AssetInventoryType",
    },
    inventory: {
      type: mongoose.Schema.ObjectId,
      ref: "AssetInventory",
    },
    availableInventoryQuantity: {
      type: Number,
      default: 0,
    },
    availableInventoryUnit: {
      type: String,
    },
    inventoryCostPerUnit: {
      type: Number,
      default: 0,
    },

    inventoryUnitCostCurrency: {
      type: mongoose.Schema.ObjectId,
      ref: "Currency",
    },
    inventoryQuantityAllocated: {
      type: Number,
      default: 0,
    },
    allocatedInventoryUnit: {
      type: String,
    },

    extraQualityAssuranceCost: {
      type: Number,
      default: 0,
    },

    extraQualityAssuranceCostCurrency: {
      type: mongoose.Schema.ObjectId,
      ref: "Currency",
    },

    qualityAssuranceDate: {
      type: Date,
    },

    status: {
      type: String,
      enum: ["in-progress", "suspended", "completed", "waived"],
    },
    comment: {
      type: String,
      trim: true,
    },
    dateLastModified: {
      type: Date,
      default: Date.now,
    },
    output: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    processorType: {
      type: String,
      enum: ["human", "machine"],
    },
    processor: {
      type: String,
    },
    supervisor: {
      type: String,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const OperationProductionQualityAssurance = mongoose.model(
  "OperationProductionQualityAssurance",
  operationProductionQualityAssuranceSchema
);

module.exports = OperationProductionQualityAssurance;
