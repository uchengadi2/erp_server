const HrExitExit = require("./../models/hrExitExitModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all hr exit exits
exports.getAllHrExitExits = factory.getAll(HrExitExit);

//create a hr exit exit
exports.createHrExitExit = factory.createOne(HrExitExit);

//get a hr exit exit
exports.getHrExitExit = factory.getOne(HrExitExit);

//deleting a hr exit exit
exports.deleteHrExitExit = factory.deleteOne(HrExitExit);

//updating a hr exit exit
exports.updateHrExitExit = factory.updateOne(HrExitExit);
