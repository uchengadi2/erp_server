const express = require("express");
const FixedAssetAccountController = require("./../controllers/fixedAssetAccountController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    FixedAssetAccountController.getAllFixedAssetAccounts
  )
  .post(
    authController.restrictTo("user"),
    //cashAccountController.setAccountTransactionsAndUserId,
    FixedAssetAccountController.createFixedAssetAccount
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    FixedAssetAccountController.deleteFixedAssetAccount
  )
  .patch(
    authController.restrictTo("user", "admin"),
    FixedAssetAccountController.updateFixedAssetAccount
  )
  .get(FixedAssetAccountController.getFixedAssetAccount);

module.exports = router;
