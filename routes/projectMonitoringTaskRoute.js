const express = require("express");
const ProjectMonitoringTaskController = require("./../controllers/projectMonitoringTaskController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    ProjectMonitoringTaskController.getAllProjectMonitoringTasks
  )
  .post(
    authController.restrictTo("user"),
    ProjectMonitoringTaskController.createProjectMonitoringTask
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    ProjectMonitoringTaskController.deleteProjectMonitoringTask
  )
  .patch(
    authController.restrictTo("user", "admin"),
    ProjectMonitoringTaskController.updateProjectMonitoringTask
  )
  .get(ProjectMonitoringTaskController.getProjectMonitoringTask);

module.exports = router;
