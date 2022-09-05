const Store = require("./../models/storeModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all stores
exports.getAllStores = factory.getAll(Store);

//create a store
exports.createStore = factory.createOne(Store);

//get a store
exports.getStore = factory.getOne(Store);

//deleting a store
exports.deleteStore = factory.deleteOne(Store);

//updating a store
exports.updateStore = factory.updateOne(Store);
