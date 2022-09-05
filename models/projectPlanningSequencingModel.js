const mongoose = require("mongoose");

const projectPlanningSequencingSchema = new mongoose.Schema(
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

const ProjectPlanningSequencing = mongoose.model(
  "ProjectPlanningSequencing",
  projectPlanningSequencingSchema
);

module.exports = ProjectPlanningSequencing;
