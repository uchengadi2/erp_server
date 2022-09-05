const mongoose = require("mongoose");

const projectPlanningActivitySchema = new mongoose.Schema(
  {
    activity: {
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

const ProjectPlanningActivity = mongoose.model(
  "ProjectPlanningActivity",
  projectPlanningActivitySchema
);

module.exports = ProjectPlanningActivity;
