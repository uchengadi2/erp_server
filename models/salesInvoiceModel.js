const mongoose = require("mongoose");

const salesInvoiceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "This field cannot be empty"],
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

const SalesInvoice = mongoose.model("SalesInvoice", salesInvoiceSchema);

module.exports = SalesInvoice;
