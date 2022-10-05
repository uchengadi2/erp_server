const mongoose = require("mongoose");

const operationOperationSchema = new mongoose.Schema(
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
    glHead: {
      type: mongoose.Schema.ObjectId,
      ref: "GlHead",
    },

    subGlHead: {
      type: mongoose.Schema.ObjectId,
      ref: "SubGlHead",
    },
    ledger: {
      type: mongoose.Schema.ObjectId,
      ref: "AccountLedgerAssetSubledger",
    },
    commencementDate: {
      type: Date,
    },
    status: {
      type: String,
      enum: ["pending", "in-progress", "suspended", "completed"],
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
