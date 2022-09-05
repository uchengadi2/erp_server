const express = require("express");
const storeSpaceAllocationController = require("./../controllers/storeSpaceAllocationController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    storeSpaceAllocationController.getAllStoreSpaceAllocations
  )
  .post(
    authController.restrictTo("user", "admin"),
    storeSpaceAllocationController.createStoreSpaceAllocation
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    storeSpaceAllocationController.deleteStoreSpaceAllocation
  )
  .patch(
    authController.restrictTo("user", "admin"),
    storeSpaceAllocationController.updateStoreSpaceAllocation
  )
  .get(storeSpaceAllocationController.getStoreSpaceAllocation);

module.exports = router;
