const mongoose = require("mongoose");

const assetInventoryTypeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "This field cannot be empty"],
    },

    description: {
      type: String,
      trim: true,
    },
    code: {
      type: String,
      required: [true, "This field cannot be empty"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const AssetInventoryType = mongoose.model(
  "AssetInventoryType",
  assetInventoryTypeSchema
);

module.exports = AssetInventoryType;
