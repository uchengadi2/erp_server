const mongoose = require("mongoose");

const accountLedgerPartnerSubLedgerSchema = new mongoose.Schema(
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

const AccountLedgerPartnerSubLedger = mongoose.model(
  "AccountLedgerPartnerSubLedger",
  accountLedgerPartnerSubLedgerSchema
);

module.exports = AccountLedgerPartnerSubLedger;
