const mongoose = require("mongoose");

const salesTaskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "This field cannot be empty"],
    },
    taskId: {
      type: String,
      required: [true, "This field cannot be empty"],
      unique: true,
    },
    description: {
      type: String,
      trim: true,
    },
    instruction: {
      type: String,
      trim: true,
    },
    to: {
      type: mongoose.Schema.ObjectId,
      ref: "User", //staff user
    },
    concernedCustomer: {
      type: mongoose.Schema.ObjectId,
      ref: "User", // customer user
    },
    product: {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
    },
    expectedResponseDueDate: {
      type: Date,
    },
    response: {
      response: {
        type: String,
      },
      responseDate: {
        type: Date,
      },
    },
    status: {
      type: String,
      enum: ["pending", "incomplete", "completed", "suspended"],
    },
    dateComppleted: {
      type: String,
    },
    dateSuspended: {
      type: Date,
    },
    originatedFrom: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    priority: {
      type: String,
      enum: ["high", "medium", "low"],
    },
    importance: {
      type: String,
      enum: ["high", "medium", "low"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const SalesTask = mongoose.model("SalesTask", salesTaskSchema);
module.exports = SalesTask;
