const HrKpiSession = require("./../models/hrKpiSessionModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all hr kpi sessions
exports.getAllHrKpiSessions = factory.getAll(HrKpiSession);

//create a hr kpi session
exports.createHrKpiSession = factory.createOne(HrKpiSession);

//get a hr kpi session
exports.getHrKpiSession = factory.getOne(HrKpiSession);

//deleting a hr kpi session
exports.deleteHrKpiSession = factory.deleteOne(HrKpiSession);

//updating a hr kpi session
exports.updateHrKpiSession = factory.updateOne(HrKpiSession);
