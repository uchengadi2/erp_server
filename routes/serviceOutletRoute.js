const express = require("express");
const ServiceOutletController = require("./../controllers/serviceOutletController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    ServiceOutletController.getAllServiceOutlets
  )
  .post(
    authController.restrictTo("user"),
    //cashAccountController.setAccountTransactionsAndUserId,
    ServiceOutletController.createServiceOutlet
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    ServiceOutletController.deleteServiceOutlet
  )
  .patch(
    authController.restrictTo("user", "admin"),
    ServiceOutletController.updateServiceOutlet
  )
  .get(ServiceOutletController.getServiceOutlet);

module.exports = router;
