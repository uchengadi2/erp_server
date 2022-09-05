const mongoose = require("mongoose");

const operationProcessingPhaseEventSchema = new mongoose.Schema(
  {
    phaseEvent: {
      type: String,
      required: [true, "This field cannot be empty"],
    },
    operationProcessingType: {
      type: mongoose.Schema.ObjectId,
      ref: "operationProcessingType",
    },
    operationProcessingTypePhase: {
      type: mongoose.Schema.ObjectId,
      ref: "operationProcessingTypePhase",
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

const OperationProcessingPhaseEvent = mongoose.model(
  "OperationProcessingPhaseEvent",
  operationProcessingPhaseEventSchema
);

module.exports = OperationProcessingPhaseEvent;
