const express = require("express");
const ProjectProjectController = require("./../controllers/projectProjectController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    ProjectProjectController.getAllProjects
  )
  .post(
    authController.restrictTo("user"),
    ProjectProjectController.createProject
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    ProjectProjectController.deleteProject
  )
  .patch(
    authController.restrictTo("user", "admin"),
    ProjectProjectController.updateProject
  )
  .get(ProjectProjectController.getProject);

module.exports = router;
