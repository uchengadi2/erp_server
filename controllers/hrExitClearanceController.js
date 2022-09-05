const HrExitClearance = require("./../models/hrExitClearanceModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all hr exit clearances
exports.getAllHrExitClearances = factory.getAll(HrExitClearance);

//create a hr exit clearance
exports.createHrExitClearance = factory.createOne(HrExitClearance);

//get a hr exit clearance
exports.getHrExitClearance = factory.getOne(HrExitClearance);

//deleting a hr exit clearance
exports.deleteHrExitClearance = factory.deleteOne(HrExitClearance);

//updating a hr exit clearance
exports.updateHrExitClearance = factory.updateOne(HrExitClearance);
