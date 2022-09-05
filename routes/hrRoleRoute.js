const express = require("express");
const hrRoleController = require("./../controllers/hrRoleController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    hrRoleController.getAllHrRoles
  )
  .post(authController.restrictTo("user"), hrRoleController.createHrRole);

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    hrRoleController.deleteHrRole
  )
  .patch(
    authController.restrictTo("user", "admin"),
    hrRoleController.updateHrRole
  )
  .get(hrRoleController.getHrRole);

module.exports = router;
