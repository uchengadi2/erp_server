const AccountLedgerStockSubLedger = require("./../models/accountLedgerStockSubledgerModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all account stock subledgers
exports.getAllAccountStockLedgerSubLedgers = factory.getAll(
  AccountLedgerStockSubLedger
);

//create an account stock subledger
exports.createAccountStockLedgerSubLedger = factory.createOne(
  AccountLedgerStockSubLedger
);

//get an account stock subledger
exports.getAccountStockLedgerSubLedger = factory.getOne(
  AccountLedgerStockSubLedger
);

//deleting an account stock subledger
exports.deleteAccountStockLedgerSubLedger = factory.deleteOne(
  AccountLedgerStockSubLedger
);

//updating an account stock subledger
exports.updateAccountStockLedgerSubLedger = factory.updateOne(
  AccountLedgerStockSubLedger
);
