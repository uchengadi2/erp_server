const mongoose = require("mongoose");

const operationProcessingFinishingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "This field cannot be empty"],
    },
    operationFinishingType: {
      type: mongoose.Schema.ObjectId,
      ref: "OperationFinishingType",
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

const OperationProcessingFinishing = mongoose.model(
  "OperationProcessingFinishing",
  operationProcessingFinishingSchema
);

module.exports = OperationProcessingFinishing;
