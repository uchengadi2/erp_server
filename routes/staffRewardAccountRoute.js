const express = require("express");
const StaffRewardAccountController = require("./../controllers/staffRewardAccountController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    StaffRewardAccountController.getAllStaffRewardAccounts
  )
  .post(
    authController.restrictTo("user"),
    //cashAccountController.setAccountTransactionsAndUserId,
    StaffRewardAccountController.createStaffRewardAccount
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    StaffRewardAccountController.deleteStaffRewardAccount
  )
  .patch(
    authController.restrictTo("user", "admin"),
    StaffRewardAccountController.updateStaffRewardAccount
  )
  .get(StaffRewardAccountController.getStaffRewardAccount);

module.exports = router;
