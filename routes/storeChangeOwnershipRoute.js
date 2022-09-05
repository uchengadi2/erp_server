const express = require("express");
const storeChangeOwnershipController = require("./../controllers/storeChangeOwnershipController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    storeChangeOwnershipController.getAllStoreChangeOwnerships
  )
  .post(
    authController.restrictTo("user"),
    storeChangeOwnershipController.createStoreChangeOwnership
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    storeChangeOwnershipController.deleteStoreChangeOwnership
  )
  .patch(
    authController.restrictTo("user", "admin"),
    storeChangeOwnershipController.updateStoreChangeOwnership
  )
  .get(storeChangeOwnershipController.getStoreChangeOwnership);

module.exports = router;
