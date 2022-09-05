const OperationProcessing = require("./../models/operationProcessingModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all operation operation processings
exports.getAllOperationProcessings = factory.getAll(OperationProcessing);

//create an operation operation processing
exports.createOperationProcessing = factory.createOne(OperationProcessing);

//get an operation operation processing
exports.getOperationProcessing = factory.getOne(OperationProcessing);

//deleting an operation operation processing
exports.deleteOperationProcessing = factory.deleteOne(OperationProcessing);

//updating an operation operation processing
exports.updateOperationProcessing = factory.updateOne(OperationProcessing);
