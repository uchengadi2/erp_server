const express = require("express");
const GlAccountController = require("./../controllers/glAccountController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    GlAccountController.getAllGlAccounts
  )
  .post(
    authController.restrictTo("user"),
    //cashAccountController.setAccountTransactionsAndUserId,
    GlAccountController.createGlAccount
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    GlAccountController.deleteGlAccount
  )
  .patch(
    authController.restrictTo("user", "admin"),
    GlAccountController.updateGlAccount
  )
  .get(GlAccountController.getGlAccount);

module.exports = router;
