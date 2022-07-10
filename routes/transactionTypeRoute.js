const express = require("express");
const TransacTypeController = require("../controllers/transactionTypeController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    TransacTypeController.getAllTransactionTypes
  )
  .post(
    authController.restrictTo("admin"),
    TransacTypeController.createTransactionType
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    TransacTypeController.deleteTransactionType
  )
  .patch(
    authController.restrictTo("user", "admin"),
    TransacTypeController.updateTransactionType
  )
  .get(TransacTypeController.getTransactionType);

module.exports = router;
