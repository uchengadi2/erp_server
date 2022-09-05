const mongoose = require("mongoose");

const hrRecruitmentInitiationSchema = new mongoose.Schema(
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

const HrRecruitmentInitiation = mongoose.model(
  "HrRecruitmentInitiation",
  hrRecruitmentInitiationSchema
);

module.exports = HrRecruitmentInitiation;
