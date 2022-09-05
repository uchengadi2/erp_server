const OperationFinishingType = require("./../models/operationFinishingTypeModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all operation finishing types
exports.getAllOperationFinishingTypes = factory.getAll(OperationFinishingType);

//create an operation finishing type
exports.createOperationFinishingType = factory.createOne(
  OperationFinishingType
);

//get an operation finishing type
exports.getOperationFinishingType = factory.getOne(OperationFinishingType);

//deleting an operation finishing type
exports.deleteOperationFinishingType = factory.deleteOne(
  OperationFinishingType
);

//updating an operation finishing type
exports.updateOperationFinishingType = factory.updateOne(
  OperationFinishingType
);
