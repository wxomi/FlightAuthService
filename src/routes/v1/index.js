const express = require("express");

const userController = require("../../controllers/user-controller");
const { authRequestValidators } = require("../../middlewares/index");

const router = express.Router();

router.post(
  "/signup",
  [authRequestValidators.validateUserAuth],
  userController.create
);
router.post(
  "/signin",
  [authRequestValidators.validateUserAuth],
  userController.signIn
);
module.exports = router;
