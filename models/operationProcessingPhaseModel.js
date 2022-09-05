const mongoose = require("mongoose");

const operationProcessingPhaseSchema = new mongoose.Schema(
  {
    phaseName: {
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

const OperationProcessingPhase = mongoose.model(
  "OperationProcessingPhase",
  operationProcessingPhaseSchema
);

module.exports = OperationProcessingPhase;
