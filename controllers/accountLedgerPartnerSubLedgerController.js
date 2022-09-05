const AccountLedgerPartnerSubLedger = require("./../models/accountLedgerPartnerSubLedgerModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all account partner subledgers
exports.getAllAccountLedgerPartnerSubLedgers = factory.getAll(
  AccountLedgerPartnerSubLedger
);

//create an account partner subledger
exports.createAccountLedgerPartnerSubLedger = factory.createOne(
  AccountLedgerPartnerSubLedger
);

//get an account partner subledger
exports.getAccountLedgerPartnerSubLedger = factory.getOne(
  AccountLedgerPartnerSubLedger
);

//deleting an account partner subledger
exports.deleteAccountLedgerPartnerSubLedger = factory.deleteOne(
  AccountLedgerPartnerSubLedger
);

//updating an account partner subledger
exports.updateAccountLedgerPartnerSubLedger = factory.updateOne(
  AccountLedgerPartnerSubLedger
);
