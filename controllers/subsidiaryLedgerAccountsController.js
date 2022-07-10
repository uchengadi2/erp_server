const subsidiaryLedgerAccount = require("../models/subsidiaryLedgerAccountsModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

//get all subsidiary ledger accounts
exports.getAllSubsidiaryLedgerAccounts = factory.getAll(
  subsidiaryLedgerAccount
);

//create a subsidiary ledger account
exports.createSubsidiaryLedgerAccount = factory.createOne(
  subsidiaryLedgerAccount
);

//get a subsidiary ledger account
exports.getSubsidiaryLedgerAccount = factory.getOne(subsidiaryLedgerAccount);

//deleting a subsidiary ledger accountt
exports.deleteSubsidiaryLedgerAccount = factory.deleteOne(
  subsidiaryLedgerAccount
);

//updating a subsidiary ledger account
exports.updateSubsidiaryLedgerAccount = factory.updateOne(
  subsidiaryLedgerAccount
);
