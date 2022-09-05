const express = require("express");
const movementTypeController = require("./../controllers/movementTypeController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    movementTypeController.getAllMovementTypes
  )
  .post(
    authController.restrictTo("user", "admin"),
    movementTypeController.createMovementType
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    movementTypeController.deleteMovementType
  )
  .patch(
    authController.restrictTo("user", "admin"),
    movementTypeController.updateMovementType
  )
  .get(movementTypeController.getMovementType);

module.exports = router;
