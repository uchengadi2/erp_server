const HrLeavesLeaves = require("./../models/hrLeavesLeavesModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all hr leaves
exports.getAllHrLeavesLeaves = factory.getAll(HrLeavesLeaves);

//create a hr leaves
exports.createHrLeavesLeave = factory.createOne(HrLeavesLeaves);

//get a hr leaves
exports.getHrLeavesLeave = factory.getOne(HrLeavesLeaves);

//deleting a hr leaves
exports.deleteHrLeavesLeave = factory.deleteOne(HrLeavesLeaves);

//updating a hr leaves
exports.updateHrLeavesLeave = factory.updateOne(HrLeavesLeaves);
