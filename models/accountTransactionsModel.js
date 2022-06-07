const mongoose = require("mongoose");

const accountTransactionsSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: [true, "The amount field cannot be empty"],
    },
    type: {
      type: String,
      enum: ["credit", "debit"],
      required: [true, "This field cannot be empty"],
    },
    narration: {
      type: String,
      trim: true,
    },
    memo: {
      type: String,
      trim: true,
    },
    transDate: {
      type: Date,
      default: Date.now,
    },
    valueDate: {
      type: Date,
      required: [true, "This field cannot be empty"],
    },
    postedBy: {
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
    authorisedBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    dateAuthorised: {
      type: Date,
      default: Date.now,
    },
    category: {
      type: String,
      enum: ["normal", "reversal"],
      default: "normal",
    },
    transId: {
      type: String,
      required: [true, "This field cannot be empty"],
    },
    fromAccount: {
      staffRewardAccount: {
        type: mongoose.Schema.ObjectId,
        ref: "StaffRewardAccount",
      },
      staffLoanAccount: {
        type: mongoose.Schema.ObjectId,
        ref: "StaffLoanAccount",
      },
      customerTransactionalAccount: {
        type: mongoose.Schema.ObjectId,
        ref: "CustomerTransactionalAccount",
      },
      customerLoanAccount: {
        type: mongoose.Schema.ObjectId,
        ref: "CustomerLoanAccount",
      },
      partnerTransactionalAccount: {
        type: mongoose.Schema.ObjectId,
        ref: "PartnerTransactionalAccount",
      },
      partnerLoanAccount: {
        type: mongoose.Schema.ObjectId,
        ref: "PartnerLoanAccount",
      },
      productAccount: {
        type: mongoose.Schema.ObjectId,
        ref: "UniqueProductAccount",
      },
      currentAssetAccount: {
        type: mongoose.Schema.ObjectId,
        ref: "CurrentAssetAccount",
      },
      currentAssetDepreciationAccount: {
        type: mongoose.Schema.ObjectId,
        ref: "CurrentAssetDepreciationAccount",
      },
      currentAssetMaintenanceAccount: {
        type: mongoose.Schema.ObjectId,
        ref: "CurrentAssetMaintenanceAccount",
      },
      currentAssetMiscellaneousAccount: {
        type: mongoose.Schema.ObjectId,
        ref: "CurrentAssetMiscellaneousAccount",
      },
      fixedAssetAccount: {
        type: mongoose.Schema.ObjectId,
        ref: "FixedAssetAccount",
      },
      fixedAssetDepreciationAccount: {
        type: mongoose.Schema.ObjectId,
        ref: "FixedAssetDepreciationAccount",
      },
      fixedAssetMaintenanceAccount: {
        type: mongoose.Schema.ObjectId,
        ref: "FixedAssetMaintenanceAccount",
      },
      fixedAssetMiscellaneousAccount: {
        type: mongoose.Schema.ObjectId,
        ref: "FixedAssetMiscellaneousAccount",
      },
      cashAccount: {
        type: mongoose.Schema.ObjectId,
        ref: "cashAccount",
      },
    },
    toAccount: {
      staffRewardAccount: {
        type: mongoose.Schema.ObjectId,
        ref: "StaffRewardAccount",
      },
      staffLoanAccount: {
        type: mongoose.Schema.ObjectId,
        ref: "StaffLoanAccount",
      },
      customerTransactionalAccount: {
        type: mongoose.Schema.ObjectId,
        ref: "CustomerTransactionalAccount",
      },
      customerLoanAccount: {
        type: mongoose.Schema.ObjectId,
        ref: "CustomerLoanAccount",
      },
      partnerTransactionalAccount: {
        type: mongoose.Schema.ObjectId,
        ref: "PartnerTransactionalAccount",
      },
      partnerLoanAccount: {
        type: mongoose.Schema.ObjectId,
        ref: "PartnerLoanAccount",
      },
      productAccount: {
        type: mongoose.Schema.ObjectId,
        ref: "UniqueProductAccount",
      },
      currentAssetAccount: {
        type: mongoose.Schema.ObjectId,
        ref: "CurrentAssetAccount",
      },
      currentAssetDepreciationAccount: {
        type: mongoose.Schema.ObjectId,
        ref: "CurrentAssetDepreciationAccount",
      },
      currentAssetMaintenanceAccount: {
        type: mongoose.Schema.ObjectId,
        ref: "CurrentAssetMaintenanceAccount",
      },
      currentAssetMiscellaneousAccount: {
        type: mongoose.Schema.ObjectId,
        ref: "CurrentAssetMiscellaneousAccount",
      },
      fixedAssetAccount: {
        type: mongoose.Schema.ObjectId,
        ref: "FixedAssetAccount",
      },
      fixedAssetDepreciationAccount: {
        type: mongoose.Schema.ObjectId,
        ref: "FixedAssetDepreciationAccount",
      },
      fixedAssetMaintenanceAccount: {
        type: mongoose.Schema.ObjectId,
        ref: "FixedAssetMaintenanceAccount",
      },
      fixedAssetMiscellaneousAccount: {
        type: mongoose.Schema.ObjectId,
        ref: "FixedAssetMiscellaneousAccount",
      },
      cashAccount: {
        type: mongoose.Schema.ObjectId,
        ref: "cashAccount",
      },
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const AccountTransactions = mongoose.model(
  "AccountTransactions",
  accountTransactionsSchema
);

module.exports = AccountTransactions;
