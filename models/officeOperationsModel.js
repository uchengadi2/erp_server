const mongoose = require("mongoose");

const officeOperationSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: [true, "Please provide the office operation  code"],
      unique: true,
      minLength: 3,
      maxLength: 4,
    },
    name: {
      type: String,
      required: [true, "Enter the office operation name"],
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

const OfficeOperation = mongoose.model(
  "OfficeOperation",
  officeOperationSchema
);

module.exports = OfficeOperation;
