const mongoose = require("mongoose");

const operationOperationSchema = new mongoose.Schema(
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

const OperationOperation = mongoose.model(
  "OperationOperation",
  operationOperationSchema
);

module.exports = OperationOperation;
