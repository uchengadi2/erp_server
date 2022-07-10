const transactionType = require("../models/transactionTypeModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

//get all transaction types
exports.getAllTransactionTypes = factory.getAll(transactionType);

//create a transaction type
exports.createTransactionType = factory.createOne(transactionType);

//get a transaction type
exports.getTransactionType = factory.getOne(transactionType);

//deleting a transaction type
exports.deleteTransactionType = factory.deleteOne(transactionType);

//updating a transaction type
exports.updateTransactionType = factory.updateOne(transactionType);
