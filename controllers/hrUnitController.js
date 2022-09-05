const HrUnit = require("./../models/hrUnitModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all hr units
exports.getAllHrUnits = factory.getAll(HrUnit);

//create a hr units
exports.createHrUnit = factory.createOne(HrUnit);

//get a hr units
exports.getHrUnit = factory.getOne(HrUnit);

//deleting a hr units
exports.deleteHrUnit = factory.deleteOne(HrUnit);

//updating a hr units
exports.updateHrUnit = factory.updateOne(HrUnit);
