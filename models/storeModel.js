const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "This field cannot be empty"],
    },
    serviceOutlet: {
      type: mongoose.Schema.ObjectId,
      ref: "ServiceOutlet",
    },
    storeType: {
      type: mongoose.Schema.ObjectId,
      ref: "storeType",
    },
    location: {
      type: mongoose.Schema.ObjectId,
      ref: "Location",
    },
    city: {
      type: mongoose.Schema.ObjectId,
      ref: "City",
    },

    glHead: {
      type: mongoose.Schema.ObjectId,
      ref: "GlHead",
    },

    subGlHead: {
      type: mongoose.Schema.ObjectId,
      ref: "SubGlHead",
    },
    ledger: {
      type: mongoose.Schema.ObjectId,
      ref: "AccountLedgerAssetSubledger",
    },
    address: String,
    height: Number,
    length: Number,
    breadth: Number,
    unuseableRegionHeight: Number,
    unuseableRegionLength: Number,
    unuseableRegionBreadth: Number,
    unallocatedSpace: Number,
    totalAllocatableSpace: Number,
    ledger: String,
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

const Store = mongoose.model("Store", storeSchema);

module.exports = Store;
