const StoreSell = require("./../models/storeSellModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all store space sales
exports.getAllStoreSells = factory.getAll(StoreSell);

//create a store space sell
exports.createStoreSell = factory.createOne(StoreSell);

//get a store space sell
exports.getStoreSell = factory.getOne(StoreSell);

//deleting a store space sell
exports.deleteStoreSell = factory.deleteOne(StoreSell);

//updating a store space sell
exports.updateStoreSell = factory.updateOne(StoreSell);
