const mongoose = require("mongoose");

const hrCompensationBonusSchema = new mongoose.Schema(
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

const HrCompensationBonus = mongoose.model(
  "HrCompensationBonus",
  hrCompensationBonusSchema
);

module.exports = HrCompensationBonus;
