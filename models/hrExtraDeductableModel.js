const mongoose = require("mongoose");

const hrExtraDeductableSchema = new mongoose.Schema(
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

const HrExtraGradeDeductable = mongoose.model(
  "HrExtraGradeDeductable",
  hrExtraDeductableSchema
);

module.exports = HrExtraGradeDeductable;
