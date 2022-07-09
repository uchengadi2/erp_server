const SchemeCode = require("../models/schemeCodeModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

//get all scheme code
exports.getAllSchemeCode = factory.getAll(SchemeCode);
//create a scheme code
exports.createSchemeCode = factory.createOne(SchemeCode);

//get a scheme code
exports.getSchemeCode = factory.getOne(SchemeCode);

//deleting a scheme code
exports.deleteSchemeCode = factory.deleteOne(SchemeCode);

//updating a scheme code
exports.updateSchemeCode = factory.updateOne(SchemeCode);
