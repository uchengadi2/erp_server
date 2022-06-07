const express = require("express");
const LivestockAssetSlotController = require("./../controllers/livestockAssetSlotController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    LivestockAssetSlotController.getAllLivestockAssetSlots
  )
  .post(
    authController.restrictTo("user"),
    //cashAccountController.setAccountTransactionsAndUserId,
    LivestockAssetSlotController.createLivestockAssetSlot
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    LivestockAssetSlotController.deleteLivestockAssetSlot
  )
  .patch(
    authController.restrictTo("user", "admin"),
    LivestockAssetSlotController.updateLivestockAssetSlot
  )
  .get(LivestockAssetSlotController.getLivestockAssetSlot);

module.exports = router;
