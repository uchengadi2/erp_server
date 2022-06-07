const mongoose = require("mongoose");

const charcoalAssetSlotSchema = new mongoose.Schema(
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
      ref: "CharcoalSeries",
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

const CharcoalSlot = mongoose.model("CharcoalSlot", charcoalAssetSlotSchema);

module.exports = CharcoalSlot;
