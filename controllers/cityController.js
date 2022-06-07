const City = require("./../models/cityModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all cities
exports.getAllCities = factory.getAll(City);

//create a city
exports.createCity = factory.createOne(City);

//get a city
exports.getCity = factory.getOne(City);

//deleting a city
exports.deleteCity = factory.deleteOne(City);

//updating a city
exports.updateCity = factory.updateOne(City);
