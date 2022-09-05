const mongoose = require("mongoose");

const storeTypeSchema = new mongoose.Schema(
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

const StoreType = mongoose.model("StoreType", storeTypeSchema);

module.exports = StoreType;
