const mongoose = require("mongoose");

const hrOrganizationLevelSchema = new mongoose.Schema(
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

const HrOrganizationLevel = mongoose.model(
  "HrOrganizationLevel",
  hrOrganizationLevelSchema
);

module.exports = HrOrganizationLevel;
