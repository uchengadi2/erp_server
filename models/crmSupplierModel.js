const mongoose = require("mongoose");

const crmSupplierSchema = new mongoose.Schema(
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

const CrmSupplier = mongoose.model("CrmSupplier", crmSupplierSchema);

module.exports = CrmSupplier;
