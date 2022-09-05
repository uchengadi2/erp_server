const mongoose = require("mongoose");

const operationProcessingQualityAssuranceSchema = new mongoose.Schema(
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

const OperationProcessingQualityAssurance = mongoose.model(
  "OperationProcessingQualityAssurance",
  operationProcessingQualityAssuranceSchema
);

module.exports = OperationProcessingQualityAssurance;
