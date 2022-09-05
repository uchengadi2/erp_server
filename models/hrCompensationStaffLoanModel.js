const mongoose = require("mongoose");

const hrCompensationStaffLoanSchema = new mongoose.Schema(
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

const HrCompensationStaffLoan = mongoose.model(
  "HrCompensationStaffLoan",
  hrCompensationStaffLoanSchema
);

module.exports = HrCompensationStaffLoan;
