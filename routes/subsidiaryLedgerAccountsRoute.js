const express = require("express");
const SubsidiaryLedgerAccountController = require("../controllers/subsidiaryLedgerAccountsController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    SubsidiaryLedgerAccountController.getAllSubsidiaryLedgerAccounts
  )
  .post(
    authController.restrictTo("admin"),
    SubsidiaryLedgerAccountController.createSubsidiaryLedgerAccount
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    SubsidiaryLedgerAccountController.deleteSubsidiaryLedgerAccount
  )
  .patch(
    authController.restrictTo("user", "admin"),
    SubsidiaryLedgerAccountController.updateSubsidiaryLedgerAccount
  )
  .get(SubsidiaryLedgerAccountController.getSubsidiaryLedgerAccount);

module.exports = router;
