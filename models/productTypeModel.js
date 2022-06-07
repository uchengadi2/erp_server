const mongoose = require("mongoose");

const productTypeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "This field cannot be empty"],
    },
    description: {
      type: String,
      trim: true,
    },
    paymentPolicySettings: {
      maximumPaymentInstallmentAllowed: {
        type: Number,
        required: [true, "This field cannot be empty"],
        max: 3,
      },
      initialPaymentPercentage: {
        rateInPercentage: {
          type: Number,
          max: 1,
        },
        paymentGracePeriodInDays: {
          type: Number,
        },
        chargesOnDefaultInPercentage: {
          type: Number,
          max: 1,
        },
      },
      secondPaymentPercentage: {
        rateInPercentage: {
          type: Number,
          max: 1,
        },
        chargesOnDefaultInPercentage: {
          type: Number,
        },
        chargesOnDefaultInPercentage: {
          type: Number,
          max: 1,
        },
      },
      thirdPaymentPercentage: {
        rateInPercentage: {
          type: Number,
          max: 1,
        },
        chargesOnDefaultInPercentage: {
          type: Number,
        },
        chargesOnDefaultInPercentage: {
          type: Number,
          max: 1,
        },
      },
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const ProductType = mongoose.model("ProductType", productTypeSchema);

module.exports = ProductType;
