const mongoose = require("mongoose");

const assetMaintenanceSchema = new mongoose.Schema(
  {
    purpose: {
      type: String,
      required: [true, "This field cannot be empty"],
    },
    assetType: {
      type: mongoose.Schema.ObjectId,
      ref: "AssetType",
    },
    asset: {
      type: mongoose.Schema.ObjectId,
      ref: "Asset",
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

const AssetMaintenance = mongoose.model(
  "AssetMaintenance",
  assetMaintenanceSchema
);

module.exports = AssetMaintenance;
