const mongoose = require("mongoose");

const operationMaintenanceTypeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [false, "This field cannot be empty"],
    },
    refNumber: {
      type: String,
    },
    processingType: {
      type: mongoose.Schema.ObjectId,
      ref: "OperationProcessingType",
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
