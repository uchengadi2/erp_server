const mongoose = require("mongoose");

const operationProcessingTypeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "This field cannot be empty"],
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

const operationProcessingType = mongoose.model(
  "operationProcessingType",
  operationProcessingTypeSchema
);

module.exports = operationProcessingType;
