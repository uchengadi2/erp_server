const mongoose = require("mongoose");

const storeSellSchema = new mongoose.Schema(
  {
    storeType: {
      type: mongoose.Schema.ObjectId,
      ref: "StoreType",
    },
    store: {
      type: mongoose.Schema.ObjectId,
      ref: "Store",
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

const StoreSell = mongoose.model("StoreSell", storeSellSchema);

module.exports = StoreSell;
