const mongoose = require("mongoose");

const projectClosureProjectSchema = new mongoose.Schema(
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

const ProjectClosureProject = mongoose.model(
  "ProjectClosureProject",
  projectClosureProjectSchema
);

module.exports = ProjectClosureProject;
