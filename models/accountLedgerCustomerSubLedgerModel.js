const mongoose = require("mongoose");

const accountLedgerCustomerSubLedgerSchema = new mongoose.Schema(
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

const AccountLedgerCustomerSubLedger = mongoose.model(
  "AccountLedgerCustomerSubLedger",
  accountLedgerCustomerSubLedgerSchema
);

module.exports = AccountLedgerCustomerSubLedger;
