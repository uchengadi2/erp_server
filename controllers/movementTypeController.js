const MovementType = require("./../models/movementTypesModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all movement types
exports.getAllMovementTypes = factory.getAll(MovementType);

//create a movement type
exports.createMovementType = factory.createOne(MovementType);

//get a movement type
exports.getMovementType = factory.getOne(MovementType);

//deleting a movement type
exports.deleteMovementType = factory.deleteOne(MovementType);

//updating a movement type
exports.updateMovementType = factory.updateOne(MovementType);
