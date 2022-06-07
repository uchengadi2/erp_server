const mongoose = require("mongoose");

const inventoriableLivestockAssetSlotSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "This field cannot be empty"],
    },
    seriesId: {
      type: String,
      unique: true,
    },
    assetSeries: {
      type: mongoose.Schema.ObjectId,
      ref: "InventoriableLivestockSeries",
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

const InventoriableLivestockSlot = mongoose.model(
  "InventoriableLivestockSlot",
  inventoriableLivestockAssetSlotSchema
);

module.exports = InventoriableLivestockSlot;
