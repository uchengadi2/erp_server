const mongoose = require("mongoose");

const projectMonitoringTaskSchema = new mongoose.Schema(
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

const ProjectMonitoringTask = mongoose.model(
  "ProjectMonitoringTask",
  projectMonitoringTaskSchema
);

module.exports = ProjectMonitoringTask;
