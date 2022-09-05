const mongoose = require("mongoose");

const salesSalesSchema = new mongoose.Schema(
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

const SalesSales = mongoose.model("SalesSales", salesSalesSchema);

module.exports = SalesSales;
