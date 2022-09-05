const AccountLedgerAssetSubLedger = require("./../models/accountLedgerAssetSubledgerModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all account asset subledgers
exports.getAllAccountAssetLedgerSubLedgers = factory.getAll(
  AccountLedgerAssetSubLedger
);

//create an account asset subledger
exports.createAccountAssetLedgerSubLedger = factory.createOne(
  AccountLedgerAssetSubLedger
);

//get an account asset subledger
exports.getAccountAssetLedgerSubLedger = factory.getOne(
  AccountLedgerAssetSubLedger
);

//deleting an account asset subledger
exports.deleteAccountAssetLedgerSubLedger = factory.deleteOne(
  AccountLedgerAssetSubLedger
);

//updating an account asset subledger
exports.updateAccountAssetLedgerSubLedger = factory.updateOne(
  AccountLedgerAssetSubLedger
);
