const express = require("express");
const FixedAssetMiscellaneousAccountController = require("./../controllers/fixedAssetMiscellaneousAccountController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    FixedAssetMiscellaneousAccountController.getAllFixedAssetMiscellaneousAccounts
  )
  .post(
    authController.restrictTo("user"),
    //cashAccountController.setAccountTransactionsAndUserId,
    FixedAssetMiscellaneousAccountController.createFixedAssetMiscellaneousAccount
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    FixedAssetMiscellaneousAccountController.deleteFixedAssetMiscellaneousAccount
  )
  .patch(
    authController.restrictTo("user", "admin"),
    FixedAssetMiscellaneousAccountController.updateFixedAssetMiscellaneousAccount
  )
  .get(
    FixedAssetMiscellaneousAccountController.getFixedAssetMiscellaneousAccount
  );

module.exports = router;
