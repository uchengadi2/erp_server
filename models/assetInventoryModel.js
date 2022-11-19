const mongoose = require("mongoose");

const assetInventorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "This field cannot be empty"],
    },
    refNumber: {
      type: String,
      unique: true,
    },
    serviceOutlet: {
      type: mongoose.Schema.ObjectId,
      ref: "ServiceOutlet",
    },
    inventoryType: {
      type: mongoose.Schema.ObjectId,
      ref: "AssetInventoryType",
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
    quantity: {
      type: Number,
    },
    datePlacedInStore: {
      type: Date,
    },
    inventoryMeasurementUnit: {
      type: mongoose.Schema.ObjectId,
      ref: "AssetInventoryMeasurementUnit",
    },
    totalCapacity: {
      type: Number,
    },
    remainingCapacity: {
      type: Number,
    },
    capacityUnit: {
      type: String,
      default: "kilogram",
      enum: [
        "kilogram",
        "grams",
        "pounds",
        "tonnes",
        "litres",
        "centilitres",
        "millilitres",
      ],
    },
    sku: {
      type: String,
      unique: true,
    },
    totalInventoryCost: {
      type: Number,
      default: 0,
    },
    currency: {
      type: mongoose.Schema.ObjectId,
      ref: "Currency",
    },
    costPerUnit: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      default: "available",
      enum: ["available", "depleted"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const AssetInventory = mongoose.model("AssetInventory", assetInventorySchema);

module.exports = AssetInventory;
