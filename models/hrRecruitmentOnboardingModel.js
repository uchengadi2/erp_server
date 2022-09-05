const mongoose = require("mongoose");

const hrRecruitmentOnboardingSchema = new mongoose.Schema(
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

const HrRecruitmentOnboarding = mongoose.model(
  "HrRecruitmentOnboarding",
  hrRecruitmentOnboardingSchema
);

module.exports = HrRecruitmentOnboarding;
