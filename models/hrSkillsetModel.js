const mongoose = require("mongoose");

const hrSkillsetSchema = new mongoose.Schema(
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

const HrSkillset = mongoose.model("HrSkillset", hrSkillsetSchema);

module.exports = HrSkillset;
