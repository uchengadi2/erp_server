const mongoose = require("mongoose");

const projectResourceSchema = new mongoose.Schema(
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
    assetType: {
      type: mongoose.Schema.ObjectId,
      ref: "AssetType",
    },
    assetSet: {
      type: mongoose.Schema.ObjectId,
      ref: "AssetSet",
    },

    assetSetBatch: {
      type: mongoose.Schema.ObjectId,
      ref: "AssetSetBatch",
    },
    storeType: {
      type: mongoose.Schema.ObjectId,
      ref: "StoreType",
    },
    store: {
      type: mongoose.Schema.ObjectId,
      ref: "Store",
    },
    stock: {
      type: mongoose.Schema.ObjectId,
      ref: "AssetStock",
    },
    stockQuantity: {
      type: Number,
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

const ProjectResource = mongoose.model(
  "ProjectResource",
  projectResourceSchema
);

module.exports = ProjectResource;
