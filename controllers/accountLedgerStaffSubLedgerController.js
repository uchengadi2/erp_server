const AccountLedgerStaffSubLedger = require("./../models/accountLedgerStaffSubledgerModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all account staff subledgers
exports.getAllAccountLedgerStaffSubLedgers = factory.getAll(
  AccountLedgerStaffSubLedger
);

//create an account staff subledger
exports.createAccountLedgerStaffSubLedger = factory.createOne(
  AccountLedgerStaffSubLedger
);

//get an account staff subledger
exports.getAccountLedgerStaffSubLedger = factory.getOne(
  AccountLedgerStaffSubLedger
);

//deleting an account staff subledger
exports.deleteAccountLedgerStaffSubLedger = factory.deleteOne(
  AccountLedgerStaffSubLedger
);

//updating an account staff subledger
exports.updateAccountLedgerStaffSubLedger = factory.updateOne(
  AccountLedgerStaffSubLedger
);
