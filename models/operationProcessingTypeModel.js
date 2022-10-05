const mongoose = require("mongoose");

const operationProcessingTypeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [false, "This field cannot be empty"],
    },
    refNumber: {
      type: String,
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

const OperationProcessingType = mongoose.model(
  "OperationProcessingType",
  operationProcessingTypeSchema
);

module.exports = OperationProcessingType;
