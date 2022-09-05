const mongoose = require("mongoose");

const hrRecruitmentSelectionSchema = new mongoose.Schema(
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

const HrRecruitmentSelection = mongoose.model(
  "HrRecruitmentSelection",
  hrRecruitmentSelectionSchema
);

module.exports = HrRecruitmentSelection;
