const mongoose = require("mongoose");

const serviceOutletSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "This field cannot be empty"],
    },
    solId: {
      type: Number,
      required: [true, "This field cannot be empty"],
      minLength: 3,
      maxLength: 4,
      unique: true,
    },
    description: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    city: {
      type: mongoose.Schema.ObjectId,
      ref: "City",
    },
    location: {
      type: mongoose.Schema.ObjectId,
      ref: "Location",
    },
    isHeadofficeOutlet: {
      type: Boolean,
      default: false,
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

const ServiceOutlet = mongoose.model("ServiceOutlet", serviceOutletSchema);
module.exports = ServiceOutlet;
