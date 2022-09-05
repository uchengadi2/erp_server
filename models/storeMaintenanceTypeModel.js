const mongoose = require("mongoose");

const storeMaintenanceTypeSchema = new mongoose.Schema(
  {
    label: {
      type: String,
      required: [true, "This field cannot be empty"],
    },
    storeType: {
      type: mongoose.Schema.ObjectId,
      ref: "StoreType",
    },
   
    description: {
      type: String,
      trim: true,
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
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const StoreMaintenanceType = mongoose.model(
  "StoreMaintenanceType",
  storeMaintenanceTypeSchema
);

module.exports = StoreMaintenanceType;
