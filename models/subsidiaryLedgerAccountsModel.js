const mongoose = require("mongoose");

const subsidiaryLedgerAccountsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Subsidiary Ledgers must have a title"],
    },
    ownerName: {
      type: String,
      required: [
        false,
        "Please provide the name of the owner of this subsidiary ledger account ",
      ],
    },
    accountNumber: {
      type: String,
      required: [true, "account number must be provided"],
      unique: true,
      minLength: 10,
      maxLength: 10,
    },
    serviceOutlet: {
      type: mongoose.Schema.ObjectId,
      ref: "serviceOutlet",
    },
    currency: {
      type: mongoose.Schema.ObjectId,
      ref: "Currency",
    },
    subGlHead: {
      type: mongoose.Schema.ObjectId,
      ref: "SubGlHead",
    },
    description: {
      type: String,
      trim: true,
    },
    memo: {
      type: String,
      trim: true,
    },
    accountManager: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    accountStatus: {
      type: String,
      enum: ["active", "inactive", "suspended", "dormant", "closed"],
    },
    accountOwnershipType: {
      type: String,
      enum: [
        "asset",
        "stock",
        "staff",
        "partner",
        "vendor",
        "customer",
        "supplier",
        "office",
        "product",
      ],
    },

    asset: {
      assetType: {
        type: mongoose.Schema.ObjectId,
        ref: "AssetType",
      },

      set: {
        type: mongoose.Schema.ObjectId,
        ref: "Set",
      },
      batch: {
        type: mongoose.Schema.ObjectId,
        ref: "Batch",
      },
      asset: {
        type: mongoose.Schema.ObjectId,
        ref: "Asset",
      },
    },
    stock: {
      assetType: {
        type: mongoose.Schema.ObjectId,
        ref: "AssetType",
      },

      set: {
        type: mongoose.Schema.ObjectId,
        ref: "Set",
      },
      batch: {
        type: mongoose.Schema.ObjectId,
        ref: "Batch",
      },
      stock: {
        type: mongoose.Schema.ObjectId,
        ref: "Asset",
      },
    },
    staff: {
      staff: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    },
    partner: {
      partner: {
        type: mongoose.Schema.ObjectId,
        ref: "Partner",
      },
    },
    vendor: {
      vendor: {
        type: mongoose.Schema.ObjectId,
        ref: "Vendor",
      },
    },
    customer: {
      customer: {
        type: mongoose.Schema.ObjectId,
        ref: "Customer",
      },
    },
    supplier: {
      supplier: {
        type: mongoose.Schema.ObjectId,
        ref: "Supplier",
      },
    },
    office: {
      office: {
        type: mongoose.Schema.ObjectId,
        ref: "OfficeOperation",
      },
    },
    product: {
      product: {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
      },
    },

    accountDebitLimit: {
      type: Number,
    },
    accountCreditLimit: {
      type: Number,
    },
    createdBy: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
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

const SubsidiaryLedgerAccount = mongoose.model(
  "SubsidiaryLedgerAccount",
  subsidiaryLedgerAccountsSchema
);

module.exports = SubsidiaryLedgerAccount;
