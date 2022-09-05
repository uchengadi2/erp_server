const HrAppraisalSeason = require("./../models/hrAppraisalSeasonModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all hr appraisal season
exports.getAllHrAppraisalSeasons = factory.getAll(HrAppraisalSeason);

//create a hr appraisal season
exports.createHrAppraisalSeason = factory.createOne(HrAppraisalSeason);

//get a hr appraisal season
exports.getHrAppraisalSeason = factory.getOne(HrAppraisalSeason);

//deleting a hr appraisal season
exports.deleteHrAppraisalSeason = factory.deleteOne(HrAppraisalSeason);

//updating a hr appraisal season
exports.updateHrAppraisalSeason = factory.updateOne(HrAppraisalSeason);
