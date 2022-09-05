const mongoose = require("mongoose");

const assetSubclassSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "This field cannot be empty"],
    },
    assetClass: {
      type: String,
      default: "tangible",
      enum: ["tangible", "inTangible"],
    },
    description: {
      type: String,
      trim: true,
    },
    createdBy: {
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

const AssetSubclass = mongoose.model("AssetSubclass", assetSubclassSchema);

module.exports = AssetSubclass;
