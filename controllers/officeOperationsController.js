const officeOperation = require("../models/officeOperationsModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

//get all  office operations
exports.getAllOfficeOperations = factory.getAll(officeOperation);

//create a  office operations
exports.createOfficeOperation = factory.createOne(officeOperation);

//get a office operations
exports.getOfficeOperation = factory.getOne(officeOperation);

//deleting a office operations
exports.deleteOfficeOperation = factory.deleteOne(officeOperation);

//updating a office operations
exports.updateOfficeOperation = factory.updateOne(officeOperation);
