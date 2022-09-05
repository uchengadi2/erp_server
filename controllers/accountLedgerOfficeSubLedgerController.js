const AccountLedgerOfficeSubLedger = require("./../models/accountLedgerOfficeSubLedgerModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all account office subledgers
exports.getAllAccountLedgerOfficeSubLedgers = factory.getAll(
  AccountLedgerOfficeSubLedger
);

//create an account office subledger
exports.createAccountLedgerOfficeSubLedger = factory.createOne(
  AccountLedgerOfficeSubLedger
);

//get an account office subledger
exports.getAccountLedgerOfficeSubLedger = factory.getOne(
  AccountLedgerOfficeSubLedger
);

//deleting an account office subledger
exports.deleteAccountLedgerOfficeSubLedger = factory.deleteOne(
  AccountLedgerOfficeSubLedger
);

//updating an account office subledger
exports.updateAccountLedgerOfficeSubLedger = factory.updateOne(
  AccountLedgerOfficeSubLedger
);
