const mongoose = require("mongoose");

const operationProductionFinishingSchema = new mongoose.Schema(
  {
    label: {
      type: String,
      required: [false, "This field cannot be empty"],
    },
    refNumber: {
      type: String,
    },
    serviceOutlet: {
      type: mongoose.Schema.ObjectId,
      ref: "ServiceOutlet",
    },
    operation: {
      type: mongoose.Schema.ObjectId,
      ref: "OperationOperation",
    },
    finishingType: {
      type: mongoose.Schema.ObjectId,
      ref: "OperationFinishingType",
    },

    finishingDate: {
      type: Date,
    },

    status: {
      type: String,
      enum: ["in-progress", "suspended", "completed", "waived"],
    },
    comment: {
      type: String,
      trim: true,
    },
    dateLastModified: {
      type: Date,
      default: Date.now,
    },
    output: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    finishingCost: {
      type: Number,
    },
    currency: {
      type: mongoose.Schema.ObjectId,
      ref: "Currency",
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
