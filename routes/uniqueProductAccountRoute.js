const express = require("express");
const UniqueProductAccountController = require("../controllers/uniqueProductAccountController");
const authController = require("../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    UniqueProductAccountController.getAllUniqueProductAccounts
  )
  .post(
    authController.restrictTo("user"),
    //cashAccountController.setAccountTransactionsAndUserId,
    UniqueProductAccountController.createUniqueProductAccount
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    UniqueProductAccountController.deleteUniqueProductAccount
  )
  .patch(
    authController.restrictTo("user", "admin"),
    UniqueProductAccountController.updateUniqueProductAccount
  )
  .get(UniqueProductAccountController.getUniqueProductAccount);

module.exports = router;
