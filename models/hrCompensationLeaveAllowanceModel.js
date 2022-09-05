const mongoose = require("mongoose");

const hrCompensationLeaveAllowanceSchema = new mongoose.Schema(
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

const HrCompensationLeaveAllowance = mongoose.model(
  "HrCompensationLeaveAllowance",
  hrCompensationLeaveAllowanceSchema
);

module.exports = HrCompensationLeaveAllowance;
