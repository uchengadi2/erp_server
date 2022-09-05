const HrCompensationBonus = require("./../models/hrCompensationBonusModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all hr compensation bonuses
exports.getAllHrCompensationBonuses = factory.getAll(HrCompensationBonus);

//create a hr compensation bonus
exports.createHrCompenaationBonus = factory.createOne(HrCompensationBonus);

//get a hr compensation bonus
exports.getHrCompensationBonus = factory.getOne(HrCompensationBonus);

//deleting a hr compensation bonus
exports.deleteHrCompensationBonus = factory.deleteOne(HrCompensationBonus);

//updating a hr compensation bonus
exports.updateHrCompensationBonus = factory.updateOne(HrCompensationBonus);
