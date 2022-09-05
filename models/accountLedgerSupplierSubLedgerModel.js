const mongoose = require("mongoose");

const accountLedgerSupplierSubLedgerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "This field cannot be empty"],
    },
    assetType: {
      type: mongoose.Schema.ObjectId,
      ref: "AssetType",
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

const AccountLedgerSupplierSubLedger = mongoose.model(
  "AccountLedgerSupplierSubLedger",
  accountLedgerSupplierSubLedgerSchema
);

module.exports = AccountLedgerSupplierSubLedger;
