const StoreChangeOwnership = require("./../models/storeChangeOwnershipModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all store  change ownerships
exports.getAllStoreChangeOwnerships = factory.getAll(StoreChangeOwnership);

//create a store change ownership
exports.createStoreChangeOwnership = factory.createOne(StoreChangeOwnership);

//get a store change ownership
exports.getStoreChangeOwnership = factory.getOne(StoreChangeOwnership);

//deleting a store change ownership
exports.deleteStoreChangeOwnership = factory.deleteOne(StoreChangeOwnership);

//updating a store change ownership
exports.updateStoreChangeOwnership = factory.updateOne(StoreChangeOwnership);
