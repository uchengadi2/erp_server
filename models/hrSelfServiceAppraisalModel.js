const mongoose = require("mongoose");

const hrSelfServiceAppraisalSchema = new mongoose.Schema(
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

const HrSelfServiceAppraisal = mongoose.model(
  "HrSelfServiceAppraisal",
  hrSelfServiceAppraisalSchema
);

module.exports = HrSelfServiceAppraisal;
