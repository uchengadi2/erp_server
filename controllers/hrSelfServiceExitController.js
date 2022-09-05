const HrSelfServiceExit = require("./../models/hrSelfServiceExitModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all hr selfservice exits
exports.getAllHrSelfServiceExits = factory.getAll(HrSelfServiceExit);

//create a hr selfservice exit
exports.createHrSelfServiceExit = factory.createOne(HrSelfServiceExit);

//get a hr selfservice exit
exports.getHrSelfServiceExit = factory.getOne(HrSelfServiceExit);

//deleting a hr selfservice exit
exports.deleteHrSelfServiceExit = factory.deleteOne(HrSelfServiceExit);

//updating a hr selfservice exit
exports.updateHrSelfServiceExit = factory.updateOne(HrSelfServiceExit);
