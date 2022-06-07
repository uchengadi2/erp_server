const glAccount = require("../models/glAccountModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all  gl accounts
exports.getAllGlAccounts = factory.getAll(glAccount);

//create a  gl account
exports.createGlAccount = factory.createOne(glAccount);

//get a gl account
exports.getGlAccount = factory.getOne(glAccount);

//deleting a gl account
exports.deleteGlAccount = factory.deleteOne(glAccount);

//updating a gl accounts
exports.updateGlAccount = factory.updateOne(glAccount);
