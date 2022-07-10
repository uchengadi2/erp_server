const express = require("express");
const SubGlHeadAccountController = require("../controllers/subGlHeadAccountController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    SubGlHeadAccountController.getAllSubGlHeadAccounts
  )
  .post(
    authController.restrictTo("admin"),
    //cashAccountController.setAccountTransactionsAndUserId,
    SubGlHeadAccountController.createSubGlHeadAccount
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    SubGlHeadAccountController.deleteSubGlHeadAccount
  )
  .patch(
    authController.restrictTo("user", "admin"),
    SubGlHeadAccountController.updateSubGlHeadAccount
  )
  .get(SubGlHeadAccountController.getSubGlHeadAccount);

module.exports = router;
