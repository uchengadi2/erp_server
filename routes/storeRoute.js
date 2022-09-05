const express = require("express");
const storeController = require("./../controllers/storeController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(authController.restrictTo("admin", "user"), storeController.getAllStores)
  .post(
    authController.restrictTo("user", "admin"),
    storeController.createStore
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    storeController.deleteStore
  )
  .patch(
    authController.restrictTo("user", "admin"),
    storeController.updateStore
  )
  .get(storeController.getStore);

module.exports = router;
