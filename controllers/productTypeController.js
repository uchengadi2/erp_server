const productType = require("../models/productTypeModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all product types
exports.getAllProductTypes = factory.getAll(productType);

//create a product type
exports.createProductType = factory.createOne(productType);

//get a product types
exports.getProductType = factory.getOne(productType);

//deleting a product types
exports.deleteProductType = factory.deleteOne(productType);

//updating a product types
exports.updateProductType = factory.updateOne(productType);
