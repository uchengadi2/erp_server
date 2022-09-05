const AccountLedgerProductSubLedger = require("./../models/accountLedgerProductSubLedgerModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all account product subledgers
exports.getAllAccountLedgerProductSubLedgers = factory.getAll(
  AccountLedgerProductSubLedger
);

//create an account product subledger
exports.createAccountLedgerProductSubLedger = factory.createOne(
  AccountLedgerProductSubLedger
);

//get an account product subledger
exports.getAccountLedgerProductSubLedger = factory.getOne(
  AccountLedgerProductSubLedger
);

//deleting an account product subledger
exports.deleteAccountLedgerProductSubLedger = factory.deleteOne(
  AccountLedgerProductSubLedger
);

//updating an account product subledger
exports.updateAccountLedgerProductSubLedger = factory.updateOne(
  AccountLedgerProductSubLedger
);
