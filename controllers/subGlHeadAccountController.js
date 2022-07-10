const subGlHeadAccount = require("../models/subGlHeadAccountModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

//get all subglhead accounts
exports.getAllSubGlHeadAccounts = factory.getAll(subGlHeadAccount);

//create a subglhead account
exports.createSubGlHeadAccount = factory.createOne(subGlHeadAccount);

//get a subglhead account
exports.getSubGlHeadAccount = factory.getOne(subGlHeadAccount);

//deleting a subglhead accountt
exports.deleteSubGlHeadAccount = factory.deleteOne(subGlHeadAccount);

//updating a subglhead account
exports.updateSubGlHeadAccount = factory.updateOne(subGlHeadAccount);
