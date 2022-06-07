const mongoose = require("mongoose");

const escalateIssueTicketSchema = new mongoose.Schema(
  {
    issue: {
      type: mongoose.Schema.ObjectId,
      ref: "IssueTicket",
    },
    team: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Team",
      },
    ],
    person: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
    description: {
      type: String,
      trim: true,
    },
    memo: {
      type: String,
      trim: true,
    },
    escalatedBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    dateEscalated: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const EscalateIssueTicket = mongoose.model(
  "EscalateIssueTicket",
  escalateIssueTicketSchema
);
module.exports = EscalateIssueTicket;
