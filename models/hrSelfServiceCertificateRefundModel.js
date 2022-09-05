const mongoose = require("mongoose");

const hrSelfServiceCertificateRefundSchema = new mongoose.Schema(
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

const HrSelfServiceCertificateRefund = mongoose.model(
  "HrSelfServiceCertificateRefund",
  hrSelfServiceCertificateRefundSchema
);

module.exports = HrSelfServiceCertificateRefund;
