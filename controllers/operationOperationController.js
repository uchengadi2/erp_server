const OperationOperation = require("./../models/operationOperationModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all operation operations
exports.getAllOperationOperations = factory.getAll(OperationOperation);

//create an operation operation
exports.createOperationOperation = factory.createOne(OperationOperation);

//get an operation operation
exports.getOperationOperation = factory.getOne(OperationOperation);

//deleting an operation operation
exports.deleteOperationOperation = factory.deleteOne(OperationOperation);

//updating an operation operation
exports.updateOperationOperation = factory.updateOne(OperationOperation);
