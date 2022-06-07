const mongoose = require("mongoose");

const transactionIssueTicketSchema = new mongoose.Schema(
  {
    salesTransaction: {
      type: mongoose.Schema.ObjectId,
      ref: "SalesTransaction",
    },
    issueTicketInitiatedDate: {
      type: Date,
      default: Date.now,
    },
    issue: {
      type: String,
      trim: true,
    },
    attentionTo: {
      type: mongoose.Schema.ObjectId,
      ref: "Team",
    },
    issueInitiatedBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    issueStatus: {
      type: String,
      enum: ["pending", "incomplete", "resolved"],
    },
    dateIssueWasLastUpdated: {
      type: Date,
      default: Date.now,
    },
    dateIssueWasResolved: {
      type: Date,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const IssueTicket = mongoose.model("IssueTicket", transactionIssueTicketSchema);
module.exports = IssueTicket;
