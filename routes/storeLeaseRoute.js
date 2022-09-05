const express = require("express");
const storeLeaseController = require("./../controllers/storeLeaseController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    storeLeaseController.getAllStoreLeases
  )
  .post(
    authController.restrictTo("user", "admin"),
    storeLeaseController.createStoreLease
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    storeLeaseController.deleteStoreLease
  )
  .patch(
    authController.restrictTo("user", "admin"),
    storeLeaseController.updateStoreLease
  )
  .get(storeLeaseController.getStoreLease);

module.exports = router;
