const AccountLedgerSupplierSubLedger = require("./../models/accountLedgerSupplierSubLedgerModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all account supplier subledgers
exports.getAllAccountSupplierLedgerSubLedgers = factory.getAll(
  AccountLedgerSupplierSubLedger
);

//create an account supplier subledger
exports.createAccountLedgerSupplierSubLedger = factory.createOne(
  AccountLedgerSupplierSubLedger
);

//get an account supplier subledger
exports.getAccountLedgerSupplierSubLedger = factory.getOne(
  AccountLedgerSupplierSubLedger
);

//deleting an account supplier subledger
exports.deleteAccountLedgerSupplierSubLedger = factory.deleteOne(
  AccountLedgerSupplierSubLedger
);

//updating an account supplier subledger
exports.updateAccountLedgerSupplierSubLedger = factory.updateOne(
  AccountLedgerSupplierSubLedger
);
