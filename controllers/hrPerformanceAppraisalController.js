const HrPerformanceAppraisal = require("./../models/hrPerformanceAppraisalModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all hr performance appraisal
exports.getAllHrPerformanceAppraisals = factory.getAll(HrPerformanceAppraisal);

//create a hr performance appraisal
exports.createHrPerformanceAppraisal = factory.createOne(
  HrPerformanceAppraisal
);

//get a hr performance appraisal
exports.getHrPerformanceAppraisal = factory.getOne(HrPerformanceAppraisal);

//deleting a hr performance appraisal
exports.deleteHrPerformanceAppraisal = factory.deleteOne(
  HrPerformanceAppraisal
);

//updating a hr performance appraisal
exports.updateHrPerformanceAppraisal = factory.updateOne(
  HrPerformanceAppraisal
);
