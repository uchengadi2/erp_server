const mongoose = require("mongoose");

const hrKpiSessionSchema = new mongoose.Schema(
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

const HrKpiSession = mongoose.model("HrKpiSession", hrKpiSessionSchema);

module.exports = HrKpiSession;
