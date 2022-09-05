const OperationProcessingFinishing = require("./../models/operationProcessingFinishingModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all operation processing finishing
exports.getAllOperationProcessingFinishings = factory.getAll(
  OperationProcessingFinishing
);

//create an operation processing finishing
exports.createOperationProcessingFinishing = factory.createOne(
  OperationProcessingFinishing
);

//get an operation processing finishing
exports.getOperationProcessingFinishing = factory.getOne(
  OperationProcessingFinishing
);

//deleting an operation processing finishing
exports.deleteOperationProcessingFinishing = factory.deleteOne(
  OperationProcessingFinishing
);

//updating an operation processing finishing
exports.updateOperationProcessingFinishing = factory.updateOne(
  OperationProcessingFinishing
);
