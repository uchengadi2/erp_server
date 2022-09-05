const AccountLedgerVendorSubLedger = require("./../models/accountLedgerVendorSubledgerModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all account vendor subledgers
exports.getAllAccountVendorLedgerSubLedgers = factory.getAll(
  AccountLedgerVendorSubLedger
);

//create an account vendor subledger
exports.createAccountVendorLedgerSubLedger = factory.createOne(
  AccountLedgerVendorSubLedger
);

//get an account vendor subledger
exports.getAccountVendorLedgerSubLedger = factory.getOne(
  AccountLedgerVendorSubLedger
);

//deleting an account vendor subledger
exports.deleteAccountVendorLedgerSubLedger = factory.deleteOne(
  AccountLedgerVendorSubLedger
);

//updating an account vendor subledger
exports.updateAccountVendorLedgerSubLedger = factory.updateOne(
  AccountLedgerVendorSubLedger
);
