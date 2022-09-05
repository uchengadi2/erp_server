const mongoose = require("mongoose");

const accountLedgerStaffSubLedgerSchema = new mongoose.Schema(
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

const AccountLedgerStaffSubLedger = mongoose.model(
  "AccountLedgerStaffSubLedger",
  accountLedgerStaffSubLedgerSchema
);

module.exports = AccountLedgerStaffSubLedger;
