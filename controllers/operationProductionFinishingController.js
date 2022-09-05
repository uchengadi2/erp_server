const OperationProductionFinishing = require("./../models/operationProductionFinishingModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all operation production finishing
exports.getAllOperationProductionFinishings = factory.getAll(
  OperationProductionFinishing
);

//create an operation production finishing
exports.createOperationProductionFinishing = factory.createOne(
  OperationProductionFinishing
);

//get an operation production finishing
exports.getOperationProductionFinishing = factory.getOne(
  OperationProductionFinishing
);

//deleting an operation production finishing
exports.deleteOperationProductionFinishing = factory.deleteOne(
  OperationProductionFinishing
);

//updating an operation production finishing
exports.updateOperationProductionFinishing = factory.updateOne(
  OperationProductionFinishing
);
