const mongoose = require("mongoose");

const hrPerformancePerformancesSchema = new mongoose.Schema(
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

const HrPerformancePerformance = mongoose.model(
  "HrPerformancePerformance",
  hrPerformancePerformancesSchema
);

module.exports = HrPerformancePerformance;
