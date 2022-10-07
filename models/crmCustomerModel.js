const mongoose = require("mongoose");

const crmCustomerSchema = new mongoose.Schema(
  {
    customerNumber: {
      type: String,
      required: [true, "Please provide the name of a vendor"],
    },
    name: {
      type: String,
      required: [false, "Please provide the name of a vendor"],
    },
    description: {
      type: String,
      trim: true,
    },
    products: {
      type: String,
      trim: true,
    },
    type: {
      type: String,
      default: "corporate",
      enum: ["corporate", "individual"],
    },

    customerCountry: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Country",
      },
    ],
    location: {
      locationAddress: String,
      locationCity: [
        {
          type: mongoose.Schema.ObjectId,
          ref: "City",
        },
      ],
      locationState: [
        {
          type: mongoose.Schema.ObjectId,
          ref: "State",
        },
      ],
      locationCountry: [
        {
          type: mongoose.Schema.ObjectId,
          ref: "Country",
        },
      ],
      locationCoordinates: [Number],
      // locationLatitude: Number,
      // locationLongititde: Number,
      officePhoneNumber: String,
    },

    contactPerson: {
      contactPersonName: {
        type: String,
      },
      contactPersonPhoneNumber: [String],
      contactPersonEmailAddress: String,
    },
    // bankDetails: {
    //   bankName: {
    //     type: String,
    //     required: [true, "Please provide your bank's name"],
    //   },
    //   bankAccountNumber: {
    //     type: String,
    //     required: [true, "Please provide your bank's account number"],
    //   },
    //   bankAccountType: {
    //     type: String,
    //     default: "current",
    //     enum: ["savings", "current", "domicilary"],
    //   },
    //   bankAccountName: {
    //     type: String,
    //     required: [true, "Please provide the bank's account name"],
    //   },
    //   bankCountry: [
    //     {
    //       type: mongoose.Schema.ObjectId,
    //       ref: "Country",
    //     },
    //   ],
    //   bankAccountSwiftCode: {
    //     type: String,
    //     required: [false, "Please provide the bank's swift code"],
    //   },
    //   bankAccountIBAN: {
    //     type: String,
    //     required: [false, "Please provide the bank's IBAN number"],
    //   },
    // },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const CrmCustomer = mongoose.model("CrmCustomer", crmCustomerSchema);

module.exports = CrmCustomer;
