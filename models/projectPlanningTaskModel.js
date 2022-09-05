const mongoose = require("mongoose");

const projectPlanningTaskSchema = new mongoose.Schema(
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

const ProjectPlanningTask = mongoose.model(
  "ProjectPlanningTask",
  projectPlanningTaskSchema
);

module.exports = ProjectPlanningTask;
