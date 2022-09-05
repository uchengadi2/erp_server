const mongoose = require("mongoose");

const projectBudgetSchema = new mongoose.Schema(
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

const ProjectBudget = mongoose.model("ProjectBudget", projectBudgetSchema);

module.exports = ProjectBudget;
