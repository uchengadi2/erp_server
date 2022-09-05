const mongoose = require("mongoose");

const movementTypeSchema = new mongoose.Schema(
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

const MovementType = mongoose.model("MovementType", movementTypeSchema);

module.exports = MovementType;
