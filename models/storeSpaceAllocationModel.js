const mongoose = require("mongoose");

const storeSpaceAllocationSchema = new mongoose.Schema(
  {
    storeType: {
      type: mongoose.Schema.ObjectId,
      ref: "StoreType",
    },
    serviceOutlet: {
      type: mongoose.Schema.ObjectId,
      ref: "ServiceOutlet",
    },
    beneficiaryServiceOutlet: {
      type: mongoose.Schema.ObjectId,
      ref: "ServiceOutlet",
    },
    store: {
      type: mongoose.Schema.ObjectId,
      ref: "Store",
    },
    allocationCost: {
      type: Number,
      default: 0,
    },
    createdBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    updatedBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    dateCreated: {
      type: Date,
      default: Date.now,
    },
    dateAllocated: {
      type: Date,
    },
    spaceAllocated: {
      type: Number,
      default: 0,
    },

    description: {
      type: String,
      trim: true,
    },
    allocationCommencementDate: {
      type: Date,
    },
    allocationEndDate: {
      type: Date,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const StoreSpaceAllocation = mongoose.model(
  "StoreSpaceAllocation",
  storeSpaceAllocationSchema
);

module.exports = StoreSpaceAllocation;
