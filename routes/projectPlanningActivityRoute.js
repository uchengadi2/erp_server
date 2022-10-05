const express = require("express");
const ProjectPlanningActivityController = require("./../controllers/projectPlanningActivityController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    ProjectPlanningActivityController.getAllProjectPlanningActivities
  )
  .post(
    authController.restrictTo("user", "admin"),
    ProjectPlanningActivityController.createProjectPlanningActivity
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    ProjectPlanningActivityController.deleteProjectPlanningActivity
  )
  .patch(
    authController.restrictTo("user", "admin"),
    ProjectPlanningActivityController.updateProjectPlanningActivity
  )
  .get(ProjectPlanningActivityController.getProjectPlanningActivity);

module.exports = router;
