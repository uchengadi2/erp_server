const mongoose = require("mongoose");

const operationQualityAssurancePhaseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "This field cannot be empty"],
    },

    operationQualityAssuranceType: {
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

const OperationQualityAssurancePhase = mongoose.model(
  "OperationQualityAssurancePhase",
  operationQualityAssurancePhaseSchema
);

module.exports = OperationQualityAssurancePhase;
