const express = require("express");
const FixedAssetSubGlAccountController = require("./../controllers/fixedAssetSubGlAccountController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    FixedAssetSubGlAccountController.getAllFixedAssetSubGlAccounts
  )
  .post(
    authController.restrictTo("user"),
    //cashAccountController.setAccountTransactionsAndUserId,
    FixedAssetSubGlAccountController.createFixedAssetSubGlAccount
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    FixedAssetSubGlAccountController.deleteFixedAssetSubGlAccount
  )
  .patch(
    authController.restrictTo("user", "admin"),
    FixedAssetSubGlAccountController.updateFixedAssetSubGlAccount
  )
  .get(FixedAssetSubGlAccountController.getFixedAssetSubGlAccount);

module.exports = router;
