const partnerSubGlAccount = require("../models/partnerSubGlAccountModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all partner sub gl accounts
exports.getAllPartnerSubGlAccounts = factory.getAll(partnerSubGlAccount);

//create a partner sub gl account
exports.createPartnerSubGlAccount = factory.createOne(partnerSubGlAccount);

//get a partner sub gl accounts
exports.getPartnerSubGlAccount = factory.getOne(partnerSubGlAccount);

//deleting a partner sub gl accounts
exports.deletePartnerSubGlAccount = factory.deleteOne(partnerSubGlAccount);

//updating a partner sub gl accounts
exports.updatePartnerSubGlAccount = factory.updateOne(partnerSubGlAccount);
