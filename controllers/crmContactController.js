const CrmContact = require("./../models/crmContactModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all crm contacts
exports.getAllCrmContacts = factory.getAll(CrmContact);

//create a crm contact
exports.createCrmContact = factory.createOne(CrmContact);

//get a crm contact
exports.getCrmContact = factory.getOne(CrmContact);

//deleting a crm contact
exports.deleteCrmContact = factory.deleteOne(CrmContact);

//updating a crm contact
exports.updateCrmContact = factory.updateOne(CrmContact);
