const mongoose = require("mongoose");

const operationProcessingSchema = new mongoose.Schema(
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
    project: {
      type: mongoose.Schema.ObjectId,
      ref: "ProjectProject",
    },
    operation: {
      type: mongoose.Schema.ObjectId,
      ref: "OperationOperation",
    },
    task: {
      type: mongoose.Schema.ObjectId,
      ref: "ProjectPlanningTask",
    },
    activity: {
      type: mongoose.Schema.ObjectId,
      ref: "ProjectPlanningActivity",
    },
    processingType: {
      type: mongoose.Schema.ObjectId,
      ref: "operationProcessingType",
    },
    processingDate: {
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
    output: {
      type: String,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },
    dateLastModified: {
      type: Date,
      default: Date.now,
    },
    processor: {
      type: String,
    },
    processorType: {
      type: String,
      enum: ["human", "machine"],
    },
    supervisor: {
      type: String,
    },
    processingCost: {
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

const OperationProcessing = mongoose.model(
  "OperationProcessing",
  operationProcessingSchema
);

module.exports = OperationProcessing;
