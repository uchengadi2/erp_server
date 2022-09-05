const express = require("express");
const ProjectMonitoringActivityController = require("./../controllers/projectMonitoringActivityController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    ProjectMonitoringActivityController.getAllProjectMonitoringActivities
  )
  .post(
    authController.restrictTo("user"),
    ProjectMonitoringActivityController.createProjectMonitoringActivity
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    ProjectMonitoringActivityController.deleteProjectMonitoringActivity
  )
  .patch(
    authController.restrictTo("user", "admin"),
    ProjectMonitoringActivityController.updateProjectMonitoringActivity
  )
  .get(ProjectMonitoringActivityController.getProjectMonitoringActivity);

module.exports = router;
