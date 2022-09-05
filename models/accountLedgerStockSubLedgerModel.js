const mongoose = require("mongoose");

const accountLedgerStockSubLedgerSchema = new mongoose.Schema(
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

const AccountLedgerStockSubLedger = mongoose.model(
  "AccountLedgerStockSubLedger",
  accountLedgerStockSubLedgerSchema
);

module.exports = AccountLedgerStockSubLedger;
