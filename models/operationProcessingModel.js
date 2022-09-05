const mongoose = require("mongoose");

const operationProcessingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "This field cannot be empty"],
    },
    operationType: {
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

const OperationProcessing = mongoose.model(
  "OperationProcessing",
  operationProcessingSchema
);

module.exports = OperationProcessing;
