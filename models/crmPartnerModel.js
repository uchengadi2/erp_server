const mongoose = require("mongoose");

const crmPartnerSchema = new mongoose.Schema(
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

const CrmPartner = mongoose.model("CrmPartner", crmPartnerSchema);

module.exports = CrmPartner;
