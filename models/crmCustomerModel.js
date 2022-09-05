const mongoose = require("mongoose");

const crmCustomerSchema = new mongoose.Schema(
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

const CrmCustomer = mongoose.model("CrmCustomer", crmCustomerSchema);

module.exports = CrmCustomer;
