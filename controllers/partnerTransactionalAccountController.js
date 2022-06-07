const partnerTransactionalAccount = require("../models/partnerTransactionalAccountModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all partner transactional accounts
exports.getAllPartnerTransactionalAccounts = factory.getAll(
  partnerTransactionalAccount
);

//create a partner transactional account
exports.createPartnerTransactionalAccount = factory.createOne(
  partnerTransactionalAccount
);

//get a partner transactional accounts
exports.getPartnerTransactionalAccount = factory.getOne(
  partnerTransactionalAccount
);

//deleting a partner transactional accounts
exports.deletePartnerTransactionalAccount = factory.deleteOne(
  partnerTransactionalAccount
);

//updating a partner transactional accounts
exports.updatePartnerTransactionalAccount = factory.updateOne(
  partnerTransactionalAccount
);
