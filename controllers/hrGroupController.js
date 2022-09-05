const HrGroup = require("./../models/hrGroupModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all hr groups
exports.getAllHrGroups = factory.getAll(HrGroup);

//create a hr group
exports.createHrGroup = factory.createOne(HrGroup);

//get a hr group
exports.getHrGroup = factory.getOne(HrGroup);

//deleting a hr group
exports.deleteHrGroup = factory.deleteOne(HrGroup);

//updating a hr group
exports.updateHrGroup = factory.updateOne(HrGroup);
