const mongoose = require("mongoose");

const glAccountSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Global Gl Accounts must have a name"],
    },
    schemeType: {
      type: String,
      required: [
        true,
        "Please provide the Scheme Type for this Global Gl account",
      ],
      enum: [
        "stfacct",
        "cusacct",
        "partacct",
        "fassacct",
        "cassacct",
        "prodacct",
        "cashacct",
      ],
    },
    currency: {
      type: String,
      required: [true, "Please provide the currency of this global gl account"],
      enum: ["naira", "dollars", "euro", "sterling"],
    },
    currencyCode: {
      type: String,
      enum: ["NGN", "USD", "EUR", "POUNDS"],
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

const Gl = mongoose.model("Gl", glAccountSchema);

module.exports = Gl;
