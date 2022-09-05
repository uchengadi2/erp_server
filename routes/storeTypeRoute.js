const express = require("express");
const storeTypeController = require("./../controllers/storeTypeController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    storeTypeController.getAllStoreTypes
  )
  .post(
    authController.restrictTo("user", "admin"),
    storeTypeController.createStoreType
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    storeTypeController.deleteStoreType
  )
  .patch(
    authController.restrictTo("user", "admin"),
    storeTypeController.updateStoreType
  )
  .get(storeTypeController.getStoreType);

module.exports = router;
