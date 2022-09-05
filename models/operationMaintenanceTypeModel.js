const mongoose = require("mongoose");

const operationMaintenanceTypeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "This field cannot be empty"],
    },
    operationProcessingType: {
      type: mongoose.Schema.ObjectId,
      ref: "operationProcessingType",
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

const OperationMaintenanceType = mongoose.model(
  "OperationMaintenanceType",
  operationMaintenanceTypeSchema
);

module.exports = OperationMaintenanceType;
