const mongoose = require("mongoose");

const commodityAssetSlotSchema = new mongoose.Schema(
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
      ref: "CommoditySeries",
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

const CommoditySlot = mongoose.model("CommoditySlot", commodityAssetSlotSchema);

module.exports = CommoditySlot;
