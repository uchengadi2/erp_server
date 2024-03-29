const mongoose = require("mongoose");

const subGlHeadAccountSchema = new mongoose.Schema(
  {
    subGlHead: {
      type: String,
      required: [true, "Please provide the subglhead account"],
      unique: true,
      minLength: 3,
      maxLength: 4,
    },
    name: {
      type: String,
      required: [true, "Gl Head Accounts must have a name"],
    },
    glHead: {
      type: mongoose.Schema.ObjectId,
      ref: "GlHead",
    },

    serviceOutlet: {
      type: mongoose.Schema.ObjectId,
      ref: "serviceOutlet",
    },
    currency: {
      type: mongoose.Schema.ObjectId,
      ref: "Currency",
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

const SubGlHead = mongoose.model("SubGlHead", subGlHeadAccountSchema);

module.exports = SubGlHead;
