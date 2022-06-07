const product = require("../models/productModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all products
exports.getAllProducts = factory.getAll(product);

//create a product
exports.createProduct = factory.createOne(product);

//get a product
exports.getProduct = factory.getOne(product);

//deleting a product
exports.deleteProduct = factory.deleteOne(product);

//updating a product
exports.updateProduct = factory.updateOne(product);
