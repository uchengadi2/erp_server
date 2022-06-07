const mongoose = require("mongoose");

const plantationAssetSlotSchema = new mongoose.Schema(
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
      ref: "PlantationSeries",
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

const PlantationSlot = mongoose.model(
  "PlantationSlot",
  plantationAssetSlotSchema
);

module.exports = PlantationSlot;
