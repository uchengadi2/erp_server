const mongoose = require("mongoose");

const projectPlanningStepSchema = new mongoose.Schema(
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

const ProjectPlanningStep = mongoose.model(
  "ProjectPlanningStep",
  projectPlanningStepSchema
);

module.exports = ProjectPlanningStep;
