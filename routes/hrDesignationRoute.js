const express = require("express");
const hrDesignationController = require("./../controllers/hrDesignationController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    hrDesignationController.getAllHrDesignations
  )
  .post(
    authController.restrictTo("user"),
    hrDesignationController.createHrDesignation
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    hrDesignationController.deleteHrDesignation
  )
  .patch(
    authController.restrictTo("user", "admin"),
    hrDesignationController.updateHrDesignation
  )
  .get(hrDesignationController.getHrDesignation);

module.exports = router;
