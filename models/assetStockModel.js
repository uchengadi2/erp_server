const mongoose = require("mongoose");

const assetStockSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "This field cannot be empty"],
    },
    serviceOutlet: {
      type: mongoose.Schema.ObjectId,
      ref: "ServiceOutlet",
    },
    assetSubclass: {
      type: mongoose.Schema.ObjectId,
      ref: "AssetSubclass",
    },
    assetType: {
      type: mongoose.Schema.ObjectId,
      ref: "AssetType",
    },
    assetSet: {
      type: mongoose.Schema.ObjectId,
      ref: "AssetSet",
    },

    assetBatch: {
      type: mongoose.Schema.ObjectId,
      ref: "AssetSetBatch",
    },
    storeType: {
      type: mongoose.Schema.ObjectId,
      ref: "StoreType",
    },
    store: {
      type: mongoose.Schema.ObjectId,
      ref: "Store",
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
    assetMeasurementUnit: {
      type: mongoose.Schema.ObjectId,
      ref: "AssetMeasurementUnit",
    },
    totalWeight: {
      type: Number,
    },
    sku: {
      type: String,
    },
    heightDimension: {
      type: Number,
    },
    lengthDimension: {
      type: Number,
    },
    widthDimension: {
      type: Number,
    },
    totalAcquisitionCost: {
      type: Number,
    },
    currency: {
      type: mongoose.Schema.ObjectId,
      ref: "Currency",
    },
    charcoal: {
      type: {
        type: String,
      },
      origin: {
        type: String,
      },
      variant: {
        type: String,
      },
    },
    livestock: {
      breed: {
        type: String,
      },
      averageAgeInMonths: {
        type: Number,
      },
      color: {
        type: String,
      },
      averageWeightInweeks: {
        type: String,
      },
      healthStatusOnArrival: {
        type: String,
        enum: ["healthy", "sickly", "unVerified"],
      },
      pregnancyStatusOnArrival: {
        type: String,
        enum: ["pregnant", "notPregnant", "unVerified"],
      },
      physicalHealthOnArrival: {
        type: String,
        enum: [
          "healthy",
          "limping",
          "withBodyInjuries",
          "withHeadInjuries",
          "withBothBodyAndHeadInjuries",
        ],
      },
      origin: {
        type: String,
      },
      gender: {
        type: String,
        enum: ["male", "female", "unVerified"],
      },
      variant: {
        type: String,
      },
      type: {
        type: String,
        enum: [
          "cow",
          "ewe",
          "goat",
          "fish",
          "pig",
          "piglet",
          "fries",
          "chicks",
          "rabbit",
          "sheep",
          "kid",
          "calf",
        ],
      },
    },
    plant: {
      origin: {
        type: String,
      },
      type: {
        type: String,
      },
      averageAgeInWeeks: {
        type: Number,
      },
      breed: {
        type: String,
      },
      variant: {
        type: String,
      },
    },
    commodity: {
      breed: {
        type: String,
      },
      color: {
        type: String,
      },
      origin: {
        type: String,
      },
      averageWeightInKg: {
        type: Number,
      },
      type: {
        type: String,
        enum: [
          "rice",
          "beans",
          "soyabeans",
          "cotton",
          "wheat",
          "maize",
          "cocoa",
          "cashewnut",
          "coffee",
        ],
      },
      variant: {
        type: String,
      },
    },
    otherStock: {},
    otherNonStock: {},
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const AssetStock = mongoose.model("AssetStock", assetStockSchema);

module.exports = AssetStock;
