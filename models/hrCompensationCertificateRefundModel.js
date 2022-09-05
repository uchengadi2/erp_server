const mongoose = require("mongoose");

const hrCompensationCertificateRefundSchema = new mongoose.Schema(
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

const HrCompensationCertificateRefund = mongoose.model(
  "HrCompensationCertificateRefund",
  hrCompensationCertificateRefundSchema
);

module.exports = HrCompensationCertificateRefund;
