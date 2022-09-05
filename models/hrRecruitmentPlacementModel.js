const mongoose = require("mongoose");

const hrRecruitmentPlacementSchema = new mongoose.Schema(
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

const HrRecruitmentPlacement = mongoose.model(
  "HrRecruitmentPlacement",
  hrRecruitmentPlacementSchema
);

module.exports = HrRecruitmentPlacement;
