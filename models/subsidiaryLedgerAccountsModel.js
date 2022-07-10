const mongoose = require("mongoose");

const subsidiaryLedgerAccountsSchema = new mongoose.Schema(
  {
    subGlHead: {
      type: String,
      required: [true, "Please provide the subglhead account"],
      unique: true,
      minLength: 3,
      maxLength: 4,
    },
    name: {
      type: String,
      required: [true, "Gl Head Accounts must have a name"],
    },
    glHead: {
      type: mongoose.Schema.ObjectId,
      ref: "GlHead",
    },

    serviceOutlet: {
      type: mongoose.Schema.ObjectId,
      ref: "serviceOutlet",
    },
    currency: {
      type: mongoose.Schema.ObjectId,
      ref: "Currency",
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

const SubsidiaryLedgerAccount = mongoose.model(
  "SubsidiaryLedgerAccount",
  subsidiaryLedgerAccountsSchema
);

module.exports = SubsidiaryLedgerAccount;
