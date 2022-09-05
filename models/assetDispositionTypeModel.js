const mongoose = require("mongoose");

const assetDispositionTypeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "This field cannot be empty"],
    },

    assetType: {
      type: mongoose.Schema.ObjectId,
      ref: "AssetType",
    },
    description: {
      type: String,
      trim: true,
    },
    createdBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    updatedBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    dateCreated: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const AssetDispositionType = mongoose.model(
  "AssetDispositionType",
  assetDispositionTypeSchema
);

module.exports = AssetDispositionType;
