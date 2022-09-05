const AccountLedgerCustomerSubLedger = require("./../models/accountLedgerCustomerSubLedgerModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all account customer subledgers
exports.getAllAccountLedgerCustomerSubLedgers = factory.getAll(
  AccountLedgerCustomerSubLedger
);

//create an account customer subledger
exports.createAccountLedgerCustomerSubLedger = factory.createOne(
  AccountLedgerCustomerSubLedger
);

//get an account customer subledger
exports.getAccountLedgerCustomerSubLedger = factory.getOne(
  AccountLedgerCustomerSubLedger
);

//deleting an account customer subledger
exports.deleteAccountLedgerCustomerSubLedger = factory.deleteOne(
  AccountLedgerCustomerSubLedger
);

//updating an account customer subledger
exports.updateAccountLedgerCustomerSubLedger = factory.updateOne(
  AccountLedgerCustomerSubLedger
);
