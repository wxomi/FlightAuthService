const express = require("express");

const userController = require("../../controllers/user-controller");
const {
  authRequestValidators,
  emailVerification,
} = require("../../middlewares/index");

const router = express.Router();

router.post(
  "/signup",
  [
    authRequestValidators.validateUserAuth,
    emailVerification.emailVerificationSender,
  ],
  userController.create
);
router.post(
  "/signin",
  [authRequestValidators.validateUserAuth],
  userController.signIn
);

router.post("/verify/:token", userController.validateEmail);

router.get("/isAuthenticated", userController.isAuthenticated);

router.get(
  "/isAdmin",
  [authRequestValidators.validateIsAdminRequest],
  userController.isAdmin
);

module.exports = router;
