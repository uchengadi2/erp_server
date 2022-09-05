const OperationProductionQualityAssurance = require("./../models/operationProductionQualityAssuranceModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all operation production quality assurances
exports.getAllOperationProductionQualityAssurances = factory.getAll(
  OperationProductionQualityAssurance
);

//create an operation production quality assurance
exports.createOperationProductionQualityAssurance = factory.createOne(
  OperationProductionQualityAssurance
);

//get an operation production quality assurance
exports.getOperationProductionQualityAssurance = factory.getOne(
  OperationProductionQualityAssurance
);

//deleting an operation production quality assurance
exports.deleteOperationProductionQualityAssurance = factory.deleteOne(
  OperationProductionQualityAssurance
);

//updating an operation production quality assurance
exports.updateOperationProductionQualityAssurance = factory.updateOne(
  OperationProductionQualityAssurance
);
