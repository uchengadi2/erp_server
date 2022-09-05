const HrSkillset = require("./../models/hrSkillsetModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all hr skilsets
exports.getAllHrSkillsets = factory.getAll(HrSkillset);

//create a hr skilset
exports.createHrSkillset = factory.createOne(HrSkillset);

//get a hr skilset
exports.getHrSkillset = factory.getOne(HrSkillset);

//deleting a hr skilset
exports.deleteHrSkillset = factory.deleteOne(HrSkillset);

//updating a hr skilset
exports.updateHrSkilset = factory.updateOne(HrSkillset);
