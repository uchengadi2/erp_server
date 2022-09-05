const HrRecruitmentInterview = require("./../models/hrRecruitmentInterviewModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all hr recruitment interview
exports.getAllHrRecruitmentInterviews = factory.getAll(HrRecruitmentInterview);

//create a hr recruitment interview
exports.createHrRecruitmentInterview = factory.createOne(
  HrRecruitmentInterview
);

//get a hr recruitment interview
exports.getHrRecruitmentInterview = factory.getOne(HrRecruitmentInterview);

//deleting a hr recruitment interview
exports.deleteHrRecruitmentInterview = factory.deleteOne(
  HrRecruitmentInterview
);

//updating a hr recruitment interview
exports.updateHrRecruitmentInterview = factory.updateOne(
  HrRecruitmentInterview
);
