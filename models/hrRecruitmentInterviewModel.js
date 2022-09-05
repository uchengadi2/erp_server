const mongoose = require("mongoose");

const hrRecruitmentInterviewSchema = new mongoose.Schema(
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

const HrRecruitmentInterview = mongoose.model(
  "HrRecruitmentInterview",
  hrRecruitmentInterviewSchema
);

module.exports = HrRecruitmentInterview;
