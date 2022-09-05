const mongoose = require("mongoose");

const salesTeamSchema = new mongoose.Schema(
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

const SalesTeam = mongoose.model("SalesTeam", salesTeamSchema);

module.exports = SalesTeam;
