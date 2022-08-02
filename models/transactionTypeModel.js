const mongoose = require("mongoose");

const transactionTypeSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: [true, "Please provide the transaction type code"],
      unique: true,
      minLength: 3,
      maxLength: 4,
    },
    name: {
      type: String,
      required: [true, "Enter the transaction type name"],
    },

    description: {
      type: String,
      trim: true,
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

const TransactionType = mongoose.model(
  "TransactionType",
  transactionTypeSchema
);

module.exports = TransactionType;
