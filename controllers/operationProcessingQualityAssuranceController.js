const OperationProcessingQualityAssurance = require("./../models/operationProcessingQualityAssuranceModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all operation processing quality assurances
exports.getAllOperationProcessingQualityAssurances = factory.getAll(
  OperationProcessingQualityAssurance
);

//create an operation processing quality assurance
exports.createOperationProcessingQualityAssurance = factory.createOne(
  OperationProcessingQualityAssurance
);

//get an operation processing quality assurance
exports.getOperationProcessingQualityAssurance = factory.getOne(
  OperationProcessingQualityAssurance
);

//deleting an operation processing quality assurance
exports.deleteOperationProcessingQualityAssurance = factory.deleteOne(
  OperationProcessingQualityAssurance
);

//updating an operation processing quality assurance
exports.updateOperationProcessingQualityAssurance = factory.updateOne(
  OperationProcessingQualityAssurance
);
