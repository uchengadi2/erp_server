const mongoose = require("mongoose");

const crmContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "This field cannot be empty"],
    },
    titles: {
      type: String,
    },
    contactRefNumber: {
      type: String,
    },
    officeAddress: {
      type: String,
    },
    homeAddress: {
      type: String,
    },
    facebookProfile: {
      type: String,
    },
    twitterProfile: {
      type: String,
    },
    linkedInProfile: {
      type: String,
    },
    occupation: {
      type: String,
    },
    placeOfEmployment: {
      type: String,
    },
    officeDesignation: {
      type: String,
    },
    emailAddresses: {
      type: String,
    },
    phoneNumbers: {
      type: String,
    },
    hobby: {
      type: String,
    },
    placesOfInterest: {
      type: String,
    },
    clubMemberships: {
      type: String,
    },
    religion: {
      type: String,
      enum: ["christianity", "islam", "others"],
    },
    gender: {
      type: String,
      enum: ["male", "female", "not-sure"],
    },
    highestEducationLevel: {
      type: String,
    },
    birthday: {
      type: Date,
    },
    placeOfOrigin: {
      type: String,
    },
    politicalPartyAffiliation: {
      type: String,
    },
    maritalStatus: {
      type: String,
      enum: ["married", "single", "divorced", "separated", "widowed"],
    },
    comment: {
      type: String,
      trim: true,
    },
    marriageAnniversary: {
      type: String,
    },
    memo: {
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
