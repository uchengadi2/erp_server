const mongoose = require("mongoose");

const operationQualityAssuranceTypeSchema = new mongoose.Schema(
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

const OperationQualityAssuranceType = mongoose.model(
  "OperationQualityAssuranceType",
  operationQualityAssuranceTypeSchema
);

module.exports = OperationQualityAssuranceType;
