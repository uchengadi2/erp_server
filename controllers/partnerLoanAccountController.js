const partnerLoanAccount = require("../models/partnerLoanAccountModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all partner loan accounts
exports.getAllPartnerLoanAccounts = factory.getAll(partnerLoanAccount);

//create a partner loan accounts
exports.createPartnerLoanAccount = factory.createOne(partnerLoanAccount);

//get a partner loan accounts
exports.getPartnerLoanAccount = factory.getOne(partnerLoanAccount);

//deleting a partner loan accounts
exports.deletePartnerLoanAccount = factory.deleteOne(partnerLoanAccount);

//updating a partner loan accounts
exports.updatePartnerLoanAccount = factory.updateOne(partnerLoanAccount);
