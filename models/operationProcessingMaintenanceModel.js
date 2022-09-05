const mongoose = require("mongoose");

const operationProcessingMaintenanceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "This field cannot be empty"],
    },
    operationMaintenanceType: {
      type: mongoose.Schema.ObjectId,
      ref: "OperationMaintenanceType",
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

const OperationProcessingMaintenance = mongoose.model(
  "OperationProcessingMaintenance",
  operationProcessingMaintenanceSchema
);

module.exports = OperationProcessingMaintenance;
