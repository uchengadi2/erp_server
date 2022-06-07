const express = require("express");
const charcoalAssetSlotController = require("./../controllers/charcoalAssetSlotController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    charcoalAssetSlotController.getAllCharcoalAssetSlots
  )
  .post(
    authController.restrictTo("user"),
    //cashAccountController.setAccountTransactionsAndUserId,
    charcoalAssetSlotController.createCharcoalAssetSlot
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    charcoalAssetSlotController.deleteCharcoalAssetSlot
  )
  .patch(
    authController.restrictTo("user", "admin"),
    charcoalAssetSlotController.updateCharcoalAssetSlot
  )
  .get(charcoalAssetSlotController.getCharcoalAssetSlot);

module.exports = router;
