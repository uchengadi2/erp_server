const mongoose = require("mongoose");

const storeLeaseSchema = new mongoose.Schema(
  {
    beneficiary: {
      type: String,
      required: [true, "This field cannot be empty"],
    },
    serviceOutlet: {
      type: mongoose.Schema.ObjectId,
      ref: "ServiceOutlet",
    },
    storeType: {
      type: mongoose.Schema.ObjectId,
      ref: "StoreType",
    },
    store: {
      type: mongoose.Schema.ObjectId,
      ref: "Store",
    },
    beneficiaryType: {
      type: String,
      enum: ["staff", "customer", "vendor", "partner", "others"],
      default: "staff",
    },

    description: {
      type: String,
      trim: true,
    },
    purpose: {
      type: String,
      trim: true,
    },
    cost: {
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
    leaseCommencementDate: {
      type: Date,
    },
    leaseEndDate: {
      type: Date,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const StoreLease = mongoose.model("StoreLease", storeLeaseSchema);

module.exports = StoreLease;
