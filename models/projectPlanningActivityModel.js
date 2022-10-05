const mongoose = require("mongoose");

const projectPlanningActivitySchema = new mongoose.Schema(
  {
    activity: {
      type: String,
      required: [true, "This field cannot be empty"],
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
    task: {
      type: mongoose.Schema.ObjectId,
      ref: "ProjectPlanningTask",
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    status: {
      type: String,
      default: "pending",
      enum: [
        "pending",
        "in-progress",
        "suspended",
        "completed",
        "waived",
        "dropped",
      ],
    },
    expectedOutcome: {
      type: String,
      trim: true,
    },
    actualOutcome: {
      type: String,
      trim: true,
    },
    dateLastModified: {
      type: Date,
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
