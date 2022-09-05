const mongoose = require("mongoose");

const salesTeamMemberSchema = new mongoose.Schema(
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

const SalesTeamMember = mongoose.model(
  "SalesTeamMember",
  salesTeamMemberSchema
);

module.exports = SalesTeamMember;
