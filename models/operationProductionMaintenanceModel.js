const mongoose = require("mongoose");

const operationProductionMaintenanceSchema = new mongoose.Schema(
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
    maintenanceType: {
      type: mongoose.Schema.ObjectId,
      ref: "OperationMaintenanceType",
    },

    maintenanceDate: {
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
    maintenanceCost: {
      type: Number,
    },
    currency: {
      type: mongoose.Schema.ObjectId,
      ref: "Currency",
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const OperationProductionMaintenance = mongoose.model(
  "OperationProductionMaintenance",
  operationProductionMaintenanceSchema
);

module.exports = OperationProductionMaintenance;
