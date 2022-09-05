const CrmPartner = require("./../models/crmPartnerModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all crm partner
exports.getAllCrmPartners = factory.getAll(CrmPartner);

//create a crm partner
exports.createCrmPartner = factory.createOne(CrmPartner);

//get a crm partner
exports.getCrmPartner = factory.getOne(CrmPartner);

//deleting a crm partner
exports.deleteCrmPartner = factory.deleteOne(CrmPartner);

//updating a crm partner
exports.updateCrmPartner = factory.updateOne(CrmPartner);
