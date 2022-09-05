const mongoose = require("mongoose");

const hrPerformanceAppraisalSchema = new mongoose.Schema(
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

const HrPerformanceAppraisal = mongoose.model(
  "HrPerformanceAppraisal",
  hrPerformanceAppraisalSchema
);

module.exports = HrPerformanceAppraisal;
