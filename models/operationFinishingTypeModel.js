const mongoose = require("mongoose");

const operationFinishingTypeSchema = new mongoose.Schema(
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

const OperationFinishingType = mongoose.model(
  "OperationFinishingType",
  operationFinishingTypeSchema
);

module.exports = OperationFinishingType;
