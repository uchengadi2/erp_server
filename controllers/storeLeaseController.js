const StoreLease = require("./../models/storeLeaseModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all store leases
exports.getAllStoreLeases = factory.getAll(StoreLease);

//create a store lease
exports.createStoreLease = factory.createOne(StoreLease);

//get a store lease
exports.getStoreLease = factory.getOne(StoreLease);

//deleting a store lease
exports.deleteStoreLease = factory.deleteOne(StoreLease);

//updating a store lease
exports.updateStoreLease = factory.updateOne(StoreLease);
