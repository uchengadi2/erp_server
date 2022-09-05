const StoreSpaceAllocation = require("./../models/storeSpaceAllocationModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all store space allocations
exports.getAllStoreSpaceAllocations = factory.getAll(StoreSpaceAllocation);

//create a store space allocation
exports.createStoreSpaceAllocation = factory.createOne(StoreSpaceAllocation);

//get a store space allocation
exports.getStoreSpaceAllocation = factory.getOne(StoreSpaceAllocation);

//deleting a store space allocation
exports.deleteStoreSpaceAllocation = factory.deleteOne(StoreSpaceAllocation);

//updating a store space allocation
exports.updateStoreSpaceAllocation = factory.updateOne(StoreSpaceAllocation);
