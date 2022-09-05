const mongoose = require("mongoose");

const hrSelfServiceStaffLoanSchema = new mongoose.Schema(
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

const HrSelfServiceStaffLoan = mongoose.model(
  "HrSelfServiceStaffLoan",
  hrSelfServiceStaffLoanSchema
);

module.exports = HrSelfServiceStaffLoan;
