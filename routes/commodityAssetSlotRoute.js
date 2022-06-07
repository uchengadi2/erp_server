const express = require("express");
const commodityAssetSlotController = require("./../controllers/commodityAssetSlotController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    commodityAssetSlotController.getAllCommodityAssetSlots
  )
  .post(
    authController.restrictTo("user"),
    //cashAccountController.setAccountTransactionsAndUserId,
    commodityAssetSlotController.createCommodityAssetSlot
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    commodityAssetSlotController.deleteCommodityAssetSlot
  )
  .patch(
    authController.restrictTo("user", "admin"),
    commodityAssetSlotController.updateCommodityAssetSlot
  )
  .get(commodityAssetSlotController.getCommodityAssetSlot);

module.exports = router;
