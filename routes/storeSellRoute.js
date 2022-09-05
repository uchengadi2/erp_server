const express = require("express");
const storeSellController = require("./../controllers/storeSellController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    storeSellController.getAllStoreSells
  )
  .post(authController.restrictTo("user"), storeSellController.createStoreSell);

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    storeSellController.deleteStoreSell
  )
  .patch(
    authController.restrictTo("user", "admin"),
    storeSellController.updateStoreSell
  )
  .get(storeSellController.getStoreSell);

module.exports = router;
