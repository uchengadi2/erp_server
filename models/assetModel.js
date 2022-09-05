const mongoose = require("mongoose");

const assetSchema = new mongoose.Schema(
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
    set: {
      type: mongoose.Schema.ObjectId,
      ref: "AssetSet",
    },

    batch: {
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
    assetRefNumber: {
      type: String,
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
    charcoal: {
      type: {
        type: String,
      },
      origin: {
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
        default: "healthy",
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
        default: "healthy",
      },
      origin: {
        type: String,
      },
      gender: {
        type: String,
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
      averageWeight: {
        type: Number,
      },
      type: String,
      enum: ["rice", "beans", "soyabeans", "cotton", "wheat", "maize", "cocoa"],
    },
    otherStock: {},
    otherNonStock: {},
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Asset = mongoose.model("Asset", assetSchema);

module.exports = Asset;
