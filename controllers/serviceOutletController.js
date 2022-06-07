const serviceOutlet = require("../models/serviceOutletModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all service outlets
exports.getAllServiceOutlets = factory.getAll(serviceOutlet);

//create a service outlet
exports.createServiceOutlet = factory.createOne(serviceOutlet);

//get a service outlet
exports.getServiceOutlet = factory.getOne(serviceOutlet);

//deleting a service outlet
exports.deleteServiceOutlet = factory.deleteOne(serviceOutlet);

//updating a service outlet
exports.updateServiceOutlet = factory.updateOne(serviceOutlet);
