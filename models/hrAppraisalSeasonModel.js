const mongoose = require("mongoose");

const hrAppraisalSeasonSchema = new mongoose.Schema(
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

const HrAppraisalSeason = mongoose.model(
  "HrAppraisalSeason",
  hrAppraisalSeasonSchema
);

module.exports = HrAppraisalSeason;
