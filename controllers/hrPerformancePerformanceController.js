const HrPerformancePerformance = require("./../models/hrPerformancePerformanceModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all hr performance performances
exports.getAllHrPerformancePerformances = factory.getAll(
  HrPerformancePerformance
);

//create a hr performance performance
exports.createHrPerformancePerformance = factory.createOne(
  HrPerformancePerformance
);

//get a hr performance performance
exports.getHrPerformancePerformance = factory.getOne(HrPerformancePerformance);

//deleting a hr performance performance
exports.deleteHrPerformancePerformance = factory.deleteOne(
  HrPerformancePerformance
);

//updating a hr performance performance
exports.updateHrPerformancePerformance = factory.updateOne(
  HrPerformancePerformance
);
