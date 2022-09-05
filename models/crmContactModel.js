const mongoose = require("mongoose");

const crmContactSchema = new mongoose.Schema(
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

const CrmContact = mongoose.model("CrmContact", crmContactSchema);

module.exports = CrmContact;
