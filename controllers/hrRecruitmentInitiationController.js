const HrRecruitmentInitiation = require("./../models/hrRecruitmentInitiationModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all hr recruitment initiation
exports.getAllHrRecruitmentInitiations = factory.getAll(
  HrRecruitmentInitiation
);

//create a hr recruitment initiation
exports.createHrRecruitmentInitiation = factory.createOne(
  HrRecruitmentInitiation
);

//get a hr recruitment initiation
exports.getHrRecruitmentInitiation = factory.getOne(HrRecruitmentInitiation);

//deleting a hr recruitment initiation
exports.deleteHrRecruitmentInitiation = factory.deleteOne(
  HrRecruitmentInitiation
);

//updating a hr recruitment initiation
exports.updateHrRecruitmentInitiation = factory.updateOne(
  HrRecruitmentInitiation
);
