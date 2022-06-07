const mongoose = require("mongoose");

const partnerLoanAccountSchema = new mongoose.Schema(
  {
    accountName: {
      type: String,
      required: [true, "Please provide the account name"],
    },
    accountNumber: {
      type: String,
      required: [true, "Account number field cannot be empty"],
    },

    accountType: {
      type: String,
      default: "loan",
      enum: ["loan"],
    },
    address: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      default: "inactive",
      enum: ["active", "inactive", "suspended"],
    },
    memo: {
      type: String,
      trim: true,
    },
    subgl: {
      type: mongoose.Schema.ObjectId,
      ref: "PartnerSubGl",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    createdBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    approvedBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    dateApproved: {
      type: Date,
      default: Date.now,
    },
    accountId: {
      type: String,
      required: [true, "This field cannot be empty"],
      unique: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const PartnerLoanAccount = mongoose.model(
  "PartnerLoanAccount",
  partnerLoanAccountSchema
);

module.exports = PartnerLoanAccount;
