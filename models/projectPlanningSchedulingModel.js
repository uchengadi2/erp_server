const mongoose = require("mongoose");

const projectPlanningSchedulingSchema = new mongoose.Schema(
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

const ProjectPlanningScheduling = mongoose.model(
  "ProjectPlanningScheduling",
  projectPlanningSchedulingSchema
);

module.exports = ProjectPlanningScheduling;
