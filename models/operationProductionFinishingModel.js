const mongoose = require("mongoose");

const operationProductionFinishingSchema = new mongoose.Schema(
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

const OperationProductionFinishing = mongoose.model(
  "OperationProductionFinishing",
  operationProductionFinishingSchema
);

module.exports = OperationProductionFinishing;
