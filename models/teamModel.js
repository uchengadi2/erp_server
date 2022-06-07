const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "This field cannot be empty"],
    },
    teamId: {
      type: String,
      required: [true, "This field cannot be empty"],
      unique: true,
    },
    members: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
    products: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
        assignedProductQuantity: {
          quantity: {
            type: Number,
          },
          unit: {
            type: String,
            enum: [
              "kg",
              "g",
              "tonnes",
              "pounds",
              "packs",
              "bag",
              "basket",
              "container",
              "unit",
            ],
          },
          dateAssigned: {
            type: Date,
          },
        },
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
    teamLeader: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      startedDate: Date,
    },
    previousLeaders: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        startedDate: Date,
        endDate: Date,
      },
    ],
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

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;
