const mongoose = require("mongoose");

const operationQualityAssurancePhaseEventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "This field cannot be empty"],
    },

    operationQualityAssuranceType: {
      type: mongoose.Schema.ObjectId,
      ref: "OperationQualityAssuranceType",
    },
    operationQualityAssurancePhase: {
      type: mongoose.Schema.ObjectId,
      ref: "OperationQualityAssurancePhase",
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

const OperationQualityAssuranceEventPhase = mongoose.model(
  "OperationQualityAssuranceEventPhase",
  operationQualityAssurancePhaseEventSchema
);

module.exports = OperationQualityAssuranceEventPhase;
