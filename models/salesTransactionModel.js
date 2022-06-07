const mongoose = require("mongoose");

const salesTransactionSchema = new mongoose.Schema(
  {
    transDate: {
      type: Date,
    },
    transId: {
      type: String,
      unique: true,
    },
    product: {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
    },
    quantity: {
      type: Number,
    },
    unit: {
      type: String,
      enum: [
        "kg",
        "g",
        "tonnes",
        "pounds",
        "packs",
        "bag",
        "basket",
        "container",
        "unit",
      ],
    },
    price: {
      type: Number,
      required: [true, "This field cannot be empty"],
    },
    discount: {
      type: Number,
    },
    salesPerson: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    salesTeam: {
      type: mongoose.Schema.ObjectId,
      ref: "Team",
    },
    status: {
      type: String,
      enum: ["incomplete", "completed"],
    },
    customer: {
      type: mongoose.Schema.ObjectId,
      ref: "User", //type customer
    },
    memo: {
      type: String,
      trim: true,
    },
    payments: {
      firstInstallmentPayment: {
        amount: Number,
        paymentDate: Date,
        status: {
          type: String,
          enum: ["incomplete", "completed"],
        },
      },
      secondInstallmentPayment: {
        amount: Number,
        paymentDate: Date,
        status: {
          type: String,
          enum: ["incomplete", "completed"],
        },
      },
      thirdInstallmentPayment: {
        amount: Number,
        paymentDate: Date,
        status: {
          type: String,
          enum: ["incomplete", "completed"],
        },
      },
    },
    productDeliveryStatus: {
      type: String,
      status: {
        type: String,
        enum: ["delivered", "not-delivered", "on-transit"],
      },
    },
    transactionApprovedBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    transactionAuthorisedBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const SalesTransaction = mongoose.model(
  "SalesTransaction",
  salesTransactionSchema
);
module.exports = SalesTransaction;
