const mongoose = require("mongoose");

const operationProductionQualityAssuranceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "This field cannot be empty"],
    },
    OperationQualityAssuranceType: {
      type: mongoose.Schema.ObjectId,
      ref: "OperationQualityAssuranceType",
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

const OperationProductionQualityAssurance = mongoose.model(
  "OperationProductionQualityAssurance",
  operationProductionQualityAssuranceSchema
);

module.exports = OperationProductionQualityAssurance;
