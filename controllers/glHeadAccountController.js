const glHeadAccount = require("../models/glHeadAccountModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all  gl head accounts
exports.getAllGlHeadAccounts = factory.getAll(glHeadAccount);

//create a  gl head account
exports.createGlHeadAccount = factory.createOne(glHeadAccount);

//get a gl head account
exports.getGlHeadAccount = factory.getOne(glHeadAccount);

//deleting a gl head  account
exports.deleteGlHeadAccount = factory.deleteOne(glHeadAccount);

//updating a gl head accounts
exports.updateGlHeadAccount = factory.updateOne(glHeadAccount);
