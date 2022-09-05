const mongoose = require("mongoose");

const hrSelfServicePayslipSchema = new mongoose.Schema(
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

const HrSelfServicePayslip = mongoose.model(
  "HrSelfServicePayslip",
  hrSelfServicePayslipSchema
);

module.exports = HrSelfServicePayslip;
