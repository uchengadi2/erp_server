const express = require("express");
const ProjectClosureProjectController = require("./../controllers/projectClosureProjectController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    ProjectClosureProjectController.getAllProjectClosures
  )
  .post(
    authController.restrictTo("user"),
    ProjectClosureProjectController.createProjectClosure
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    ProjectClosureProjectController.deleteProjectClosure
  )
  .patch(
    authController.restrictTo("user", "admin"),
    ProjectClosureProjectController.updateProjectClosure
  )
  .get(ProjectClosureProjectController.getProjectClosure);

module.exports = router;
