const mongoose = require("mongoose");

const operationProductionMaintenanceSchema = new mongoose.Schema(
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

const OperationProductionMaintenance = mongoose.model(
  "OperationProductionMaintenance",
  operationProductionMaintenanceSchema
);

module.exports = OperationProductionMaintenance;
