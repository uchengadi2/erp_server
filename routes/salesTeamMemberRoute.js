const express = require("express");
const SalesTeamMemberController = require("./../controllers/salesTeamMemberController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    SalesTeamMemberController.getAllSalesTeamMembers
  )
  .post(
    authController.restrictTo("user"),
    SalesTeamMemberController.createSalesTeamMember
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    SalesTeamMemberController.deleteSalesTeamMember
  )
  .patch(
    authController.restrictTo("user", "admin"),
    SalesTeamMemberController.updateSalesTeamMember
  )
  .get(SalesTeamMemberController.getSalesTeamMember);

module.exports = router;
