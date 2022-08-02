const mongoose = require("mongoose");

const glHeadAccountSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Gl Head Accounts must have a name"],
    },
    glHead: {
      type: String,
      required: [true, "Gl Head Accounts must have a Hl Head"],
      minLength: 3,
      maxLength: 4,
      unique: true,
    },
    schemeCode: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "SchemeCode",
      },
    ],

    accountClass: {
      type: String,
      required: [true, "Please provide the account class"],
      enum: ["assets", "liabilities", "equity", "revenue", "expense"],
    },

    description: {
      type: String,
      trim: true,
    },
    createdBy: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
    updatedBy: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
    dateCreated: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const GlHead = mongoose.model("GlHead", glHeadAccountSchema);

module.exports = GlHead;
