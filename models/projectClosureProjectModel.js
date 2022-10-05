const mongoose = require("mongoose");

const projectClosureProjectSchema = new mongoose.Schema(
  {
    label: {
      type: String,
      required: [false, "This field cannot be empty"],
    },
    refNumber: {
      type: String,
    },
    serviceOutlet: {
      type: mongoose.Schema.ObjectId,
      ref: "ServiceOutlet",
    },
    project: {
      type: mongoose.Schema.ObjectId,
      ref: "ProjectProject",
    },
    dateClosed: {
      type: Date,
    },
    description: {
      type: String,
      trim: true,
    },
    closedBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
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
