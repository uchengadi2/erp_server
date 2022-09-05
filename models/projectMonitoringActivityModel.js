const mongoose = require("mongoose");

const projectMonitoringActivitySchema = new mongoose.Schema(
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

const ProjectMonitoringActivity = mongoose.model(
  "ProjectMonitoringActivity",
  projectMonitoringActivitySchema
);

module.exports = ProjectMonitoringActivity;
