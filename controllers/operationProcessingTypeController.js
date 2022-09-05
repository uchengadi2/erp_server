const OperationProcessingType = require("./../models/operationProcessingTypeModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all operation processing types
exports.getAllOperationProcessingTypes = factory.getAll(
  OperationProcessingType
);

//create an operation processing type
exports.createOperationProcessingType = factory.createOne(
  OperationProcessingType
);

//get an operation processing type
exports.getOperationProcessingType = factory.getOne(OperationProcessingType);

//deleting an operation processing type
exports.deleteOperationProcessingType = factory.deleteOne(
  OperationProcessingType
);

//updating an operation processing type
exports.updateOperationProcessingType = factory.updateOne(
  OperationProcessingType
);
