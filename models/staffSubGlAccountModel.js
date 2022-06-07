const mongoose = require("mongoose");

const staffSubGlAccountSchema = new mongoose.Schema(
  {
    subGlHeader: {
      type: String,
      required: [true, "Please provide the subgl account header name"],
      unique: true,
      minLength: 10,
      maxLength: 10,
    },
    accountType: {
      type: String,
      enum: ["reward", "loan"],
      default: "reward",
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

const StaffSubGl = mongoose.model("StaffSubGl", staffSubGlAccountSchema);

module.exports = StaffSubGl;
