const express = require("express");
const accountLedgerPartnerSubLedgerController = require("./../controllers/accountLedgerPartnerSubLedgerController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    accountLedgerPartnerSubLedgerController.getAllAccountLedgerPartnerSubLedgers
  )
  .post(
    authController.restrictTo("user"),
    accountLedgerPartnerSubLedgerController.createAccountLedgerPartnerSubLedger
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    accountLedgerPartnerSubLedgerController.deleteAccountLedgerPartnerSubLedger
  )
  .patch(
    authController.restrictTo("user", "admin"),
    accountLedgerPartnerSubLedgerController.updateAccountLedgerPartnerSubLedger
  )
  .get(
    accountLedgerPartnerSubLedgerController.getAccountLedgerPartnerSubLedger
  );

module.exports = router;
