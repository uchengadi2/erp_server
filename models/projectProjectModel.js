const mongoose = require("mongoose");

const projectProjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "This field cannot be empty"],
    },
    refNumber: {
      type: String,
    },
    sponsor: {
      type: String,
    },
    totalBudget: {
      type: Number,
      default: 0,
    },
    currency: {
      type: mongoose.Schema.ObjectId,
      ref: "Currency",
    },
    remainingBudgetedAmount: {
      type: Number,
    },

    projectManager: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    serviceOutlet: {
      type: mongoose.Schema.ObjectId,
      ref: "ServiceOutlet",
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    status: {
      type: String,
      enum: ["pending", "in-progress", "completed", "suspended", "closed"],
      default: "pending",
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

const ProjectProject = mongoose.model("ProjectProject", projectProjectSchema);

module.exports = ProjectProject;
