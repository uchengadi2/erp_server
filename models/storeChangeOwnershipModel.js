const mongoose = require("mongoose");

const storeChangeOwnershipSchema = new mongoose.Schema(
  {
    currentOwner: {
      type: String,
      required: [true, "This field cannot be empty"],
    },
    newOwner: {
      type: String,
      required: [true, "This field cannot be empty"],
    },
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

const StoreChangeOwnership = mongoose.model(
  "StoreChangeOwnership",
  storeChangeOwnershipSchema
);

module.exports = StoreChangeOwnership;
