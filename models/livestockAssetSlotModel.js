const mongoose = require("mongoose");

const livestockAssetSlotSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "This field cannot be empty"],
    },
    slotId: {
      type: String,
      unique: true,
    },
    assetSeries: {
      type: mongoose.Schema.ObjectId,
      ref: "LivestockSeries",
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

const LivestockSlot = mongoose.model("LivestockSlot", livestockAssetSlotSchema);

module.exports = LivestockSlot;
