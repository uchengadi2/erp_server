const mongoose = require("mongoose");

const cashSubGlAccountSchema = new mongoose.Schema(
  {
    subGlHeader: {
      type: String,
      required: [true, "Please provide the subgl account header code"],
      unique: true,
      minLength: 10,
      maxLength: 10,
    },
    accountType: {
      type: String,
      enum: ["cash"],
      default: "cash",
    },
    serviceOutlet: {
      type: mongoose.Schema.ObjectId,
      ref: "serviceOutlet",
    },
    glHeader: {
      type: mongoose.Schema.ObjectId,
      ref: "Gl",
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

const CashSubGl = mongoose.model("CashSubGl", cashSubGlAccountSchema);

module.exports = CashSubGl;
