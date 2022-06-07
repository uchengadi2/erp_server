const mongoose = require("mongoose");

const assetTypeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "This field cannot be empty"],
    },
    assetSchemeType: {
      type: String,
      required: [true, "This field cannot be empty"],
      enum: [
        "charcoal",
        "livestock",
        "inventorable-livestock",
        "commodity",
        "plantation",
      ],
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

const AssetType = mongoose.model("AssetType", assetTypeSchema);

module.exports = AssetType;
